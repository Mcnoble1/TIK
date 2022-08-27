/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

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
    // Specify Alice's interact interface here
    createEvent: Details,
    seeRSVP: Fun([Address], Null),
    confirmGuest: Fun([Address], Null),
    manageFunds: Fun([], Null),
    ready: Fun([], Null),
  });

  const Attendee = API('Attendee', {
    // Specify Bob's interact interface here
    rsvpForEvent: Fun([Bytes(64), Bytes(64), UInt, UInt, Bytes(64), Bytes(64), Bytes(64)], Null),  
    checkIn: Fun([], Null)
  });

  const Info = View('Info', {
    details: Details,
    // howMany: UInt,
    // reserved: Fun([Address], Bool),
  });
  // const Notify = Events({
  //   register: [Address],
  //   checkin: [Address, Bool],
  // });
  init();

  Admin.only(() => {
    const details = declassify(interact.createEvent);
  })
  // The first one to publish deploys the contract
  Admin.publish(details);
  const {title, location, fee, tickets, organizer, date, description} = details;
  // enforce( thisConsensusTime() < deadline, "too late" );
  Info.details.set(details);
  const Guests = new Map(Bool);

  // Info.reserved.set((who) => isSome(Guests[who]));
  // commit();
  Admin.interact.ready();

  const [ numTickets] = parallelReduce([ tickets])
  .invariant(balance() >= 0)
  .while(numTickets > 0)
  .api_(Attendee.rsvpForEvent, (titl, locate, fees, tick, organize, time, descrip) => {
    check(fees == fee, "Fee can't be zero");
    // check(! done, "event started");
    // check(isNone(Guests[this]), "already registered");
    return [fees, (notify) => {
      Guests[this] = true;
      notify(null);
      const who = this; 
      Admin.interact.seeRSVP(who); 
      // Admin.interact.confirmGuest(who);
      return [ numTickets - 1];
    }];
  })
  .api_(Attendee.checkIn, () => {
    // check(balance() == fee, "not an attendee");
    // check(isSome(Guests[guest]), "no reservation");
    return [ fee, (notify) => {
      notify(null);
      const who = this; 
      Admin.interact.confirmGuest(who); 
      if (balance() == fee) {
        transfer(balance()).to(who);
      } else {
        transfer(balance() / numTickets).to(who);
      }
      return [ numTickets ];
    } ];
  });

  // Attendee.only(() => {
  //   interact.rsvpForEvent(title, location, fee, tickets, organizer, date, description);
  // })
  // Attendee.publish()
  //   .pay(fee);
  // commit()

  // Admin.interact.seeRSVP(Attendee);

  // Attendee.only(() => {
  //   const checkIn = declassify(interact.checkIn());
  // })
  // Attendee.publish(checkIn);
  // commit();

  // Admin.only(() => {
  //   const manageFunds = declassify(interact.manageFunds());
  //   const confirmGuest = declassify(interact.confirmGuest(Attendee));
  // })
  // Admin.publish(manageFunds, confirmGuest);
  
  transfer(balance()).to(Admin);


  commit();

  exit();
});