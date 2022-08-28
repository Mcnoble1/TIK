/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';


// The event information structure (object)
const Details = Object({
  title: Bytes(64),
  location: Bytes(64),
  fee: UInt,
  tickets: UInt,
  organizer: Bytes(64),
  date: Bytes(64),
  description: Bytes(64),
})

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const Admin = Participant('Admin', {
    // The Admin interact interface for managing events
    createEvent: Details,
    seeRSVP: Fun([Address], Null),
    confirmGuest: Fun([Address], Null),
    manageFunds: Fun([], Null),
  });

  const Attendee = API('Attendee', {
    // The Attendee interact interface for events
    rsvpForEvent: Fun([Bytes(64), Bytes(64), UInt, UInt, Bytes(64), Bytes(64), Bytes(64)], Null),  
    checkIn: Fun([], Null)
  });

  // View for showing the event details in the Frontend
  const Info = View('Info', {
    details: Details,
  });
  
  init();

  // Admin creating, publishing the event details and deploying the contract
  Admin.only(() => {
    const details = declassify(interact.createEvent);
  })
  Admin.publish(details);
  const {title, location, fee, tickets, organizer, date, description} = details;
  Info.details.set(details);
  const Guests = new Map(Bool);

  // Attendee RSVPing for the event using a parallel reduce for the process
  const [ numTickets] = parallelReduce([ tickets])
  .invariant(balance() >= 0)
  .while(numTickets > 0)
  .api_(Attendee.rsvpForEvent, (titl, locate, fees, tick, organize, time, descrip) => {
    check(fees == fee, "Fee can't be zero");
    return [fees, (notify) => {
      Guests[this] = true;
      notify(null);
      const who = this; 
      Admin.interact.seeRSVP(who); 
      return [ numTickets ];
    }];
  })
  .api_(Attendee.checkIn, () => {
    return [ (notify) => {
      notify(null);
      const who = this; 
      Admin.interact.confirmGuest(who); 
      transfer(balance()).to(who);
      // if (balance() == fee) {
      //   transfer(balance()).to(who);
      // } else {
      //   transfer(balance() / numTickets).to(who);
      // }
      return [ numTickets - 1 ];
    } ];
  });
  
  transfer(balance()).to(Admin);

  commit();

  exit();
});