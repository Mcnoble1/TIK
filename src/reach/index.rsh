/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

export const main = Reach.App(() => {
  const Admin = Participant('Admin', {
    // Specify Alice's interact interface here
    createEvent: Fun([], Object({
      title: Bytes(64),
      eventId: UInt,
      fee: UInt,
      location: Bytes(64),
      description: Bytes(64),
      tickets: UInt,
      organizer: Bytes(64),
    })),
    seeRSVP: Fun([Address], Null),
    confirmGuest: Fun([Address], Null),
    manageFunds: Fun([], Null),
  });
  const Attendee = Participant('Attendee', {
    // Specify Bob's interact interface here
    rsvpForEvent: Fun([UInt, Bytes(64)], Null),  
    checkIn: Fun([], Null)
  });
  init();

  Admin.only(() => {
    const { title, eventId, fee, location, description, tickets, organizer } = declassify(interact.createEvent());
  })
  // The first one to publish deploys the contract
  Admin.publish(title, eventId, fee, location, description, tickets, organizer)
    // .pay(fees);
  commit();


  // The second one to publish always attaches
  Attendee.only(() => {
    interact.rsvpForEvent(fee, title);
  })
  Attendee.publish()
    .pay(fee);
  commit()

  Admin.interact.seeRSVP(Attendee);

  Attendee.only(() => {
    const checkIn = declassify(interact.checkIn());
  })
  Attendee.publish(checkIn);
  commit();

  Admin.only(() => {
    const manageFunds = declassify(interact.manageFunds());
    const confirmGuest = declassify(interact.confirmGuest(Attendee));
  })
  Admin.publish(manageFunds, confirmGuest);
  transfer(balance()).to(Attendee);


  commit();

  exit();
});
