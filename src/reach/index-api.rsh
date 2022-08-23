/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const Admin = Participant('Admin', {
    // Specify Alice's interact interface here
    createEvent: Fun([], Object({
      title: Bytes(64),
      fee: UInt,
      date: Bytes(64),
      location: Bytes(64),
      description: Bytes(64),
      tickets: UInt,
      organizer: Bytes(64),
    })),
    seeRSVP: Fun([Address], Null),
    confirmGuest: Fun([Address], Null),
    manageFunds: Fun([], Null),
    ready: Fun([], Null),
  });

  const Attendee = API('Attendee', {
    rsvpForEvent: Fun([UInt, Bytes(64), Bytes(64), Bytes(64), Bytes(64), Bytes(64),], Null),
    // checkIn: Fun([], Null)
  });
  init();

  Admin.only(() => {
    const { title, fee, location, date, description, tickets, organizer } = declassify(interact.createEvent());
  })
  // The first one to publish deploys the contract
  Admin.publish(title, date, fee, location, description, tickets, organizer)
    // .pay(fees);
    const Guests = new Map(Bool);
// commit();

  Admin.interact.ready();

  const [numTickets] = parallelReduce([tickets])
    .invariant(balance() >= 0)
    .while(numTickets > 0)
    .api_(Attendee.rsvpForEvent, (fees, titl, locate, time, organize, descrip) => {
      check(fees == fee, "Fee can't be zero");
      // check(! done, "event started");
      // check(isNone(Guests[this]), "already registered");
      return [fees, (notify) => {
        Guests[this] = true;
        notify(null);
        const who = this; 
        Admin.interact.seeRSVP(who); 
        Admin.interact.confirmGuest(who);
        return [ numTickets - 1];
      }];
    })

    transfer(balance()).to(Admin);

  commit();

  exit();
});
