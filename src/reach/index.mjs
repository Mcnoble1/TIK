/* eslint-disable no-unused-expressions */
import {loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

// let ctcinfo;
let done = false;
const RSVPs = [];
let details = null;

    const title = await ask.ask(
      'Enter the event name:',
      (x => x)
    );
    const location = await ask.ask(
      'Where is the event?',
      (x => x)
    );
    const fee = await ask.ask(
      'How much would you like to charge for the event?',
      stdlib.parseCurrency,
    );
    const tickets = await ask.ask(
      'How many tickets would you like to sell?',
      (x => x)
    );
    const organizer = await ask.ask(
      'Who is the event organizer?',
      (x => x)
    );
    const date = await ask.ask(
      'Enter the event date:',
      (x => x)
    );
    const description = await ask.ask(
      'What is the event about?',
      (x => x)
    );
    
details = { title, location, fee, tickets, organizer, date, description };  



// const isAdmin = await ask.ask(
//   'Are you an Admin',
//   ask.yesno
// )

// const who = isAdmin ? 'Admin' : 'Attendee';

// console.log(`Welcome to the RSVP Platform as ${who}`);

console.log(`Welcome to the RSVP Platform`);

const accAdmin = await stdlib.newTestAccount(stdlib.parseCurrency(1000));

const getBalance = async () => stdlib.formatCurrency(await stdlib.balanceOf(accAdmin)); // get the balance
console.log(`Your balance before is ${await getBalance()}`); 

console.log(`Creating the Event`);

// let acc = null;
// const createAcc = await ask.ask(
//     `Would you like to create an account? (only possible on devnet)`,
//     ask.yesno
// );

// if (createAcc) {
//     acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
// } else {
//     const secret = await ask.ask(
//         'Enter your secret key',
//         (x => x)
//     );
//     acc = await stdlib.newAccountFromSecret(secret);
// }

// let ctc = null;
// if (isAdmin) {
//     ctc = acc.contract(backend);
//     ctc.getInfo().then((info) => {
//         console.log(`Your contract is deployed as = ${JSON.stringify(info)}`);
//     });
// } else {
//     const info = await ask.ask(
//         'Please paste the contract information: ',
//         JSON.parse
//     );
//     ctc = acc.contract(backend, info);
// }


// implement Attendee's interact object here

const startRSVP = async () => {
  const runRSVP = async(who) => {
    const {title, location, fee, tickets, organizer, date, description } = details;

    const acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000)); 
    acc.setDebugLabel(); // set the debug label 
    RSVPs.push([who, acc]);
    const info = await ask.ask(
               'Please paste the contract information: ',
               JSON.parse
           );
    const ctc = acc.contract(backend, info);
    const getBalance = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc)); // get the balance
 
    try {
    await ctc.apis.Attendee.rsvpForEvent(title, location, fee, tickets, organizer, date, description); 
      console.log(`${who} paid ${stdlib.formatCurrency(fee)} ${stdlib.standardUnit} for the event`);
      console.log(`${who} have RSVPed for the event: ${title} 
                   with the details: ${description}
                  which costs: ${stdlib.formatCurrency(fee)} ${stdlib.standardUnit}
                  and is held at: ${location}
                  on: ${date}
                  organized by: ${organizer}`);
    } catch (e) {
      console.log(`${who} failed to make a reservation because tickets sold out.`); 
    };
    console.log(`${who} balance after is ${await getBalance()}`); // log the balance

      
    const checkin = await ask.ask(
      'Would you like to check in?',
      ask.yesno
      );
      if (checkin) {
        try {
        await ctc.apis.Attendee.checkIn(); 
        console.log(`You have successfully checked in, you will get your money back.`);  
        } catch (e) {
          console.log(`You have failed to check in and deadline has passed.`); 
        };
        console.log(`${who} balance after is ${await getBalance()}`); // log the balance
     } else {
        console.log(`You did not checked in.`); 
        console.log(`${who} balance after is ${await getBalance()}`); // log the balance
     }

    }
    // if (RSVPs.length === tickets) {
    //   console.log(`All tickets have been reserved.`);
    //   done = true;
    // }
    await runRSVP('Alice');
    await runRSVP('Bob');
    await runRSVP('Charlie');
    await runRSVP('Dave');
    while (!done) {
    await stdlib.wait(0);
    }
};




const ctcAdmin = accAdmin.contract(backend);
  ctcAdmin.getInfo().then((info) => {
      console.log(`Your contract is deployed as = ${JSON.stringify(info)}`);
      // ctcinfo = info;
    });
await ctcAdmin.participants.Admin({
        // implement Admin's interact object here
  ...stdlib.hasRandom,
  createEvent: details,
  
  ready: () => {
    console.log('The event is ready to start accepting reservations.');
    startRSVP();
  },
  
  seeRSVP: (who) => {
    console.log(`${stdlib.formatAddress(who)} made a reservation for the event.`);
  },
  
  confirmGuest: (who) => {
    console.log(`${stdlib.formatAddress(who)} has checked in.`);
  },
  
  manageFunds: () => {
    console.log(`The funds are managed`);
  },
});



for (const [name, acc] of RSVPs) {
  console.log(`${name} with the address ${stdlib.formatAddress(acc)} made a reservation and checked in to the event.`);
  }

const after = await getBalance();
console.log(`Your balance is now ${after}`);

console.log('Goodbye, Admin and Attendee!');
ask.done();

done = true;
