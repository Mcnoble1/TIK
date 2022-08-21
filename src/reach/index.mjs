/* eslint-disable no-unused-expressions */
import {loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const isAdmin = await ask.ask(
  'Are you an Admin',
  ask.yesno
)

const who = isAdmin ? 'Admin' : 'Attendee';

console.log(`Welcome to the RSVP App as ${who}`);

let acc = null;
const createAcc = await ask.ask(
    `Would you like to create an account? (only possible on devnet)`,
    ask.yesno
);

if (createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
    const secret = await ask.ask(
        'Enter your secret key',
        (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAdmin) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`Your contract is deployed as = ${JSON.stringify(info)}`);
    });
} else {
    const info = await ask.ask(
        'Please paste the contract information: ',
        JSON.parse
    );
    ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance before is ${before} ${stdlib.standardUnit}`);

const interact = { ...stdlib.hasRandom };

let eventDetails = null;

if (isAdmin) {

  console.log('Creating the Event...');

  const title = await ask.ask(
    'Enter the event name:',
    (x => x)
  );
  const eventId = await ask.ask(
    'Enter the event ID:',
    (x => x)
  );
  const fee = await ask.ask(
    'How much would you like to charge for the event?',
    stdlib.parseCurrency,
  );
  const location = await ask.ask(
    'Where is the event?',
    (x => x)
  );
  const description = await ask.ask(
    'What is the event about?',
    (x => x)
  );
  const tickets = await ask.ask(
    'How many tickets would you like to sell?',
    (x => x)
  );
  const organizer = await ask.ask(
    'Who is the event organizer?',
    (x => x)
  );
  eventDetails = { title, eventId, fee, location, description, tickets, organizer };
  
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 } [stdlib.connector];	
};

console.log('Starting backends...');

interact.createEvent = () => {
  console.log(`The event details is sent to the contract:`, eventDetails);
  return eventDetails;
},

interact.seeRSVP = (who) => {
  console.log(`${stdlib.formatAddress(who)} made a reservation for the event.`);
},

interact.confirmGuest = (who) => {
  console.log(`${stdlib.formatAddress(who)} has checked in.`);
},


interact.manageFunds = () => {
  console.log(`The funds are managed`);
},

interact.rsvpForEvent = async (fee, title) => {
  console.log(`You paid ${fmt(fee)} ${stdlib.standardUnit} for the event`);
  console.log(`You have RSVPed for the event: ${title} which costs ${fmt(fee)} ${stdlib.standardUnit}`);
}

interact.checkIn = async (who) => {
  const check = await ask.ask(
    'Would you like to check in?',
    ask.yesno
  );
  if (check) {    
    const now = await getBalance();
    console.log(`Your balance after RSVP is ${now} ${stdlib.standardUnit}`);
   console.log(`You have checked in. You should get your money back.`);
  } else {
    console.log(`You have not checked in.`);
  }
}

// implement Attendee's interact object here
 
const part = isAdmin ? ctc.p.Admin : ctc.p.Attendee;
await part(interact);

// const after = await getBalance();
const after = await getBalance();
console.log(`Your balance is now ${after}`);

console.log('Goodbye, Admin and Attendee!');
ask.done();
