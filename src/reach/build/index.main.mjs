// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    date: ctc1,
    description: ctc1,
    fee: ctc2,
    location: ctc1,
    organizer: ctc1,
    tickets: ctc2,
    title: ctc1
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Data({
    None: ctc4,
    Some: ctc5
    });
  const map0_ctc = ctc6;
  
  
  const Info_details = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v362, v363, v368, v381, v385] = svs;
      return (await ((async () => {
        
        
        return v363;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        details: {
          decode: Info_details,
          ty: ctc3
          }
        }
      },
    views: {
      3: [ctc0, ctc3, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Object({
    date: ctc3,
    description: ctc3,
    fee: ctc4,
    location: ctc3,
    organizer: ctc3,
    tickets: ctc4,
    title: ctc3
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc4, ctc4, ctc3, ctc3, ctc3]);
  const ctc8 = stdlib.T_Data({
    Attendee_checkIn0_62: ctc6,
    Attendee_rsvpForEvent0_62: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v352 = stdlib.protect(ctc5, interact.createEvent, 'for Admin\'s interact field createEvent');
  
  const txn1 = await (ctc.sendrecv({
    args: [v352],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v363], secs: v365, time: v364, didSend: v34, from: v362 } = txn1;
      
      ;
      const v368 = v363.fee;
      const v369 = v363.tickets;
      
      const v381 = v369;
      const v382 = v364;
      const v385 = stdlib.checkedBigNumberify('./index.rsh:45:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v388 = stdlib.gt(v381, stdlib.checkedBigNumberify('./index.rsh:63:23:decimal', stdlib.UInt_max, '0'));
        
        return v388;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v362,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v363], secs: v365, time: v364, didSend: v34, from: v362 } = txn1;
  ;
  const v368 = v363.fee;
  const v369 = v363.tickets;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:59:23:application',
    fs: ['at ./index.rsh:59:23:application call to [unknown function] (defined at: ./index.rsh:59:23:function exp)', 'at ./index.rsh:59:23:application call to "liftedInteract" (defined at: ./index.rsh:59:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v381 = v369;
  let v382 = v364;
  let v385 = stdlib.checkedBigNumberify('./index.rsh:45:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v388 = stdlib.gt(v381, stdlib.checkedBigNumberify('./index.rsh:63:23:decimal', stdlib.UInt_max, '0'));
    
    return v388;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v447], secs: v449, time: v448, didSend: v252, from: v446 } = txn2;
    switch (v447[0]) {
      case 'Attendee_checkIn0_62': {
        const v450 = v447[1];
        undefined /* setApiDetails */;
        const v466 = stdlib.safeAdd(v385, v368);
        ;
        const v468 = null;
        await txn2.getOutput('Attendee_checkIn', 'v468', ctc0, v468);
        stdlib.protect(ctc0, await interact.confirmGuest(v446), {
          at: './index.rsh:83:34:application',
          fs: ['at ./index.rsh:83:34:application call to [unknown function] (defined at: ./index.rsh:83:34:function exp)', 'at ./index.rsh:83:34:application call to "liftedInteract" (defined at: ./index.rsh:83:34:application)', 'at ./index.rsh:80:28:application call to [unknown function] (defined at: ./index.rsh:80:28:function exp)'],
          msg: 'confirmGuest',
          who: 'Admin'
          });
        
        const v476 = stdlib.eq(v466, v368);
        if (v476) {
          const v481 = stdlib.safeSub(v466, v466);
          ;
          const cv381 = v381;
          const cv382 = v448;
          const cv385 = v481;
          
          v381 = cv381;
          v382 = cv382;
          v385 = cv385;
          
          continue;}
        else {
          const v484 = stdlib.safeDiv(v466, v381);
          const v488 = stdlib.safeSub(v466, v484);
          ;
          const cv381 = v381;
          const cv382 = v448;
          const cv385 = v488;
          
          v381 = cv381;
          v382 = cv382;
          v385 = cv385;
          
          continue;}
        break;
        }
      case 'Attendee_rsvpForEvent0_62': {
        const v523 = v447[1];
        undefined /* setApiDetails */;
        const v531 = v523[stdlib.checkedBigNumberify('./index.rsh:64:8:spread', stdlib.UInt_max, '2')];
        const v536 = stdlib.eq(v531, v368);
        stdlib.assert(v536, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:65:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:64:84:application call to [unknown function] (defined at: ./index.rsh:64:84:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:64:84:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
          msg: 'Fee can\'t be zero',
          who: 'Admin'
          });
        const v539 = stdlib.safeAdd(v385, v531);
        ;
        await stdlib.mapSet(map0, v446, true);
        const v580 = null;
        await txn2.getOutput('Attendee_rsvpForEvent', 'v580', ctc0, v580);
        stdlib.protect(ctc0, await interact.seeRSVP(v446), {
          at: './index.rsh:72:29:application',
          fs: ['at ./index.rsh:72:29:application call to [unknown function] (defined at: ./index.rsh:72:29:function exp)', 'at ./index.rsh:72:29:application call to "liftedInteract" (defined at: ./index.rsh:72:29:application)', 'at ./index.rsh:68:28:application call to [unknown function] (defined at: ./index.rsh:68:28:function exp)'],
          msg: 'seeRSVP',
          who: 'Admin'
          });
        
        const v594 = stdlib.safeSub(v381, stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, '1'));
        const cv381 = v594;
        const cv382 = v448;
        const cv385 = v539;
        
        v381 = cv381;
        v382 = cv382;
        v385 = cv385;
        
        continue;
        break;
        }
      }
    
    }
  ;
  return;
  
  
  };
export async function _Attendee_checkIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attendee_checkIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attendee_checkIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Object({
    date: ctc4,
    description: ctc4,
    fee: ctc5,
    location: ctc4,
    organizer: ctc4,
    tickets: ctc5,
    title: ctc4
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc5, ctc5, ctc4, ctc4, ctc4]);
  const ctc9 = stdlib.T_Data({
    Attendee_checkIn0_62: ctc7,
    Attendee_rsvpForEvent0_62: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v362, v363, v368, v381, v385] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc5, ctc5, ctc5]);
  const v429 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:77:30:application call to [unknown function] (defined at: ./index.rsh:77:30:function exp)', 'at ./index.rsh:61:39:application call to "runAttendee_checkIn0_62" (defined at: ./index.rsh:77:8:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
    msg: 'in',
    who: 'Attendee_checkIn'
    });
  const v433 = ['Attendee_checkIn0_62', v429];
  
  const txn1 = await (ctc.sendrecv({
    args: [v362, v363, v368, v381, v385, v433],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v368, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v447], secs: v449, time: v448, didSend: v252, from: v446 } = txn1;
      
      switch (v447[0]) {
        case 'Attendee_checkIn0_62': {
          const v450 = v447[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendee_checkIn"
            });
          const v466 = stdlib.safeAdd(v385, v368);
          sim_r.txns.push({
            amt: v368,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v468 = null;
          const v469 = await txn1.getOutput('Attendee_checkIn', 'v468', ctc0, v468);
          
          const v476 = stdlib.eq(v466, v368);
          if (v476) {
            const v481 = stdlib.safeSub(v466, v466);
            sim_r.txns.push({
              kind: 'from',
              to: v446,
              tok: undefined /* Nothing */
              });
            const v736 = v381;
            const v738 = v481;
            const v739 = stdlib.gt(v381, stdlib.checkedBigNumberify('./index.rsh:63:23:decimal', stdlib.UInt_max, '0'));
            if (v739) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v362,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v484 = stdlib.safeDiv(v466, v381);
            const v488 = stdlib.safeSub(v466, v484);
            sim_r.txns.push({
              kind: 'from',
              to: v446,
              tok: undefined /* Nothing */
              });
            const v740 = v381;
            const v742 = v488;
            const v743 = stdlib.gt(v381, stdlib.checkedBigNumberify('./index.rsh:63:23:decimal', stdlib.UInt_max, '0'));
            if (v743) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v362,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Attendee_rsvpForEvent0_62': {
          const v523 = v447[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc5, ctc5, ctc5, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v447], secs: v449, time: v448, didSend: v252, from: v446 } = txn1;
  switch (v447[0]) {
    case 'Attendee_checkIn0_62': {
      const v450 = v447[1];
      undefined /* setApiDetails */;
      const v466 = stdlib.safeAdd(v385, v368);
      ;
      const v468 = null;
      const v469 = await txn1.getOutput('Attendee_checkIn', 'v468', ctc0, v468);
      if (v252) {
        stdlib.protect(ctc0, await interact.out(v450, v469), {
          at: './index.rsh:77:9:application',
          fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:9:function exp)', 'at ./index.rsh:81:13:application call to "notify" (defined at: ./index.rsh:80:28:function exp)', 'at ./index.rsh:80:28:application call to [unknown function] (defined at: ./index.rsh:80:28:function exp)'],
          msg: 'out',
          who: 'Attendee_checkIn'
          });
        }
      else {
        }
      
      const v476 = stdlib.eq(v466, v368);
      if (v476) {
        const v481 = stdlib.safeSub(v466, v466);
        ;
        const v736 = v381;
        const v738 = v481;
        const v739 = stdlib.gt(v381, stdlib.checkedBigNumberify('./index.rsh:63:23:decimal', stdlib.UInt_max, '0'));
        if (v739) {
          return;
          }
        else {
          ;
          return;
          }}
      else {
        const v484 = stdlib.safeDiv(v466, v381);
        const v488 = stdlib.safeSub(v466, v484);
        ;
        const v740 = v381;
        const v742 = v488;
        const v743 = stdlib.gt(v381, stdlib.checkedBigNumberify('./index.rsh:63:23:decimal', stdlib.UInt_max, '0'));
        if (v743) {
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'Attendee_rsvpForEvent0_62': {
      const v523 = v447[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Attendee_rsvpForEvent3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Attendee_rsvpForEvent3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Attendee_rsvpForEvent3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Object({
    date: ctc4,
    description: ctc4,
    fee: ctc5,
    location: ctc4,
    organizer: ctc4,
    tickets: ctc5,
    title: ctc4
    });
  const ctc7 = stdlib.T_Tuple([ctc4, ctc4, ctc5, ctc5, ctc4, ctc4, ctc4]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Attendee_checkIn0_62: ctc8,
    Attendee_rsvpForEvent0_62: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v362, v363, v368, v381, v385] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc5, ctc5, ctc5]);
  const v391 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:64:84:application call to [unknown function] (defined at: ./index.rsh:64:84:function exp)', 'at ./index.rsh:61:39:application call to "runAttendee_rsvpForEvent0_62" (defined at: ./index.rsh:64:8:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
    msg: 'in',
    who: 'Attendee_rsvpForEvent'
    });
  const v394 = v391[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v406 = stdlib.eq(v394, v368);
  stdlib.assert(v406, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:65:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:64:84:application call to [unknown function] (defined at: ./index.rsh:64:84:function exp)', 'at ./index.rsh:61:39:application call to "runAttendee_rsvpForEvent0_62" (defined at: ./index.rsh:64:8:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
    msg: 'Fee can\'t be zero',
    who: 'Attendee_rsvpForEvent'
    });
  const v425 = ['Attendee_rsvpForEvent0_62', v391];
  
  const txn1 = await (ctc.sendrecv({
    args: [v362, v363, v368, v381, v385, v425],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v394, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v447], secs: v449, time: v448, didSend: v252, from: v446 } = txn1;
      
      switch (v447[0]) {
        case 'Attendee_checkIn0_62': {
          const v450 = v447[1];
          
          break;
          }
        case 'Attendee_rsvpForEvent0_62': {
          const v523 = v447[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Attendee_rsvpForEvent"
            });
          const v531 = v523[stdlib.checkedBigNumberify('./index.rsh:64:8:spread', stdlib.UInt_max, '2')];
          const v539 = stdlib.safeAdd(v385, v531);
          sim_r.txns.push({
            amt: v531,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 0, v446, true);
          const v580 = null;
          const v581 = await txn1.getOutput('Attendee_rsvpForEvent', 'v580', ctc0, v580);
          
          const v594 = stdlib.safeSub(v381, stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, '1'));
          const v756 = v594;
          const v758 = v539;
          const v759 = stdlib.gt(v594, stdlib.checkedBigNumberify('./index.rsh:63:23:decimal', stdlib.UInt_max, '0'));
          if (v759) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v362,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc5, ctc5, ctc5, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v447], secs: v449, time: v448, didSend: v252, from: v446 } = txn1;
  switch (v447[0]) {
    case 'Attendee_checkIn0_62': {
      const v450 = v447[1];
      return;
      break;
      }
    case 'Attendee_rsvpForEvent0_62': {
      const v523 = v447[1];
      undefined /* setApiDetails */;
      const v531 = v523[stdlib.checkedBigNumberify('./index.rsh:64:8:spread', stdlib.UInt_max, '2')];
      const v536 = stdlib.eq(v531, v368);
      stdlib.assert(v536, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:65:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:64:84:application call to [unknown function] (defined at: ./index.rsh:64:84:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:64:84:function exp)', 'at ./index.rsh:61:39:application call to [unknown function] (defined at: ./index.rsh:61:39:function exp)'],
        msg: 'Fee can\'t be zero',
        who: 'Attendee_rsvpForEvent'
        });
      const v539 = stdlib.safeAdd(v385, v531);
      ;
      await stdlib.mapSet(map0, v446, true);
      const v580 = null;
      const v581 = await txn1.getOutput('Attendee_rsvpForEvent', 'v580', ctc0, v580);
      if (v252) {
        stdlib.protect(ctc0, await interact.out(v523, v581), {
          at: './index.rsh:64:9:application',
          fs: ['at ./index.rsh:64:9:application call to [unknown function] (defined at: ./index.rsh:64:9:function exp)', 'at ./index.rsh:70:13:application call to "notify" (defined at: ./index.rsh:68:28:function exp)', 'at ./index.rsh:68:28:application call to [unknown function] (defined at: ./index.rsh:68:28:function exp)'],
          msg: 'out',
          who: 'Attendee_rsvpForEvent'
          });
        }
      else {
        }
      
      const v594 = stdlib.safeSub(v381, stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, '1'));
      const v756 = v594;
      const v758 = v539;
      const v759 = stdlib.gt(v594, stdlib.checkedBigNumberify('./index.rsh:63:23:decimal', stdlib.UInt_max, '0'));
      if (v759) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Attendee_checkIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee_checkIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee_checkIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Attendee_checkIn3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Attendee_rsvpForEvent(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee_rsvpForEvent expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee_rsvpForEvent expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Attendee_rsvpForEvent3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Attendee_checkIn()byte[0]`, `Attendee_rsvpForEvent(byte[64],byte[64],uint64,uint64,byte[64],byte[64],byte[64])byte[0]`],
    pure: [`Info_details()(byte[64],byte[64],uint64,byte[64],byte[64],uint64,byte[64])`],
    sigs: [`Attendee_checkIn()byte[0]`, `Attendee_rsvpForEvent(byte[64],byte[64],uint64,uint64,byte[64],byte[64],byte[64])byte[0]`, `Info_details()(byte[64],byte[64],uint64,byte[64],byte[64],uint64,byte[64])`]
    },
  appApproval: `BiAKAAHQAgOJy6SEDsTBk/0PIAKAAQUmBQEAAAEBAQIBAyI1ADEYQQKiKWRJIls1AYEIWzUCMRkjEkEACzEAKIACAABmQgJtNhoAF0lBAHIiNQQjNQZJIQQMQABQSSEFDEAAISEFEkQ0ASUSRChkKmRQK2RQJwRkUEk1AyEGJFg1B0ICPyEEEkQ2GgE2GgJQNhoDUDYaBFA2GgVQNhoGUDYaB1A1/yo0/1BCAC2Bk8Hm9AESRCk1/yg0/1Akr1BCABg2GgIXNQQ2GgM2GgEXSSEHDEABByEHEkQlNAESRDQESSISTDQCEhFEKGQqZFArZFAnBGRQSTUDSUpJVwAgNf8hBiRYNf6B8AJbNf2B+AJbNfyBgANbNftJNQU1+oAEu3wciTT6ULA0+iJVQABsNPs0/Qg1+TT9iAGvgAgAAAAAAAAB1LApNQc0+TT9EkEAIbEisgE0+bIII7IQMQCyB7M0/zT+NP00/DIGNPlJCUIAqDT5NPwKNfixIrIBNPiyCCOyEDEAsgezNP80/jT9NPwyBjT5NPgJQgB/NPojJFg1+TT5IQhbSTX4NP0SRDT4iAE3MQAogAIBAWaACAAAAAAAAAJEsCk1BzT/NP40/TT8IwkyBjT7NPgIQgA9IhJEgaCNBogBAyI0ARJENARJIhJMNAISEURJNQU1/4AEpdSENTT/ULAxADT/SSEIWzT/gYgCWzIGIkIAADX/Nf41/TX8Nfs1+jT9Ig1BADw0+jT7UDT8FlA0/RZQNP8WUChLAVcAf2cqSwFXf39nK0sBV/5/ZycESwGB/QKBC1hnSCU1ATIGNQJCAC+xIrIBNP+yCCOyEDT6sgezQgAAMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEJMTUSRCIxNhJEIzE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 4,
  stateSize: 392,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_date",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_description",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_location",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_organizer",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_tickets",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T3",
                "name": "v363",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_date",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_description",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_fee",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_location",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_organizer",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_tickets",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T3",
                "name": "v363",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_checkIn0_62",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem0",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem3",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem4",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem5",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem6",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Attendee_rsvpForEvent0_62",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v447",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v468",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v580",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Attendee_checkIn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T2",
        "name": "_a0",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T2",
        "name": "_a1",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a3",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T2",
        "name": "_a4",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T2",
        "name": "_a5",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T2",
        "name": "_a6",
        "type": "tuple"
      }
    ],
    "name": "Attendee_rsvpForEvent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Info_details",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T2",
            "name": "_date",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T2",
            "name": "_description",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "_fee",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T2",
            "name": "_location",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T2",
            "name": "_organizer",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "_tickets",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T2",
            "name": "_title",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Attendee_checkIn0_62",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem0",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem3",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem4",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem5",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T2",
                        "name": "elem6",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Attendee_rsvpForEvent0_62",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v447",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001cd638038062001cd683398101604081905262000026916200055b565b60008055436003556040517f0bd289e75a1fe11a45e8eb70f6f50625499201f0423faf5c258f81f6e2290be490620000629033908490620006bb565b60405180910390a16200007834156008620000d5565b62000082620001f2565b805133905260208083018051518351830152805151604090810151845182015290515160a0015182840180519190915280514393019290925290516000910152620000cd81620000ff565b50506200077e565b81620000fb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151511562000192576200011562000236565b8151516001600160a01b031681528151602090810151818301528251604090810151818401528184018051516060850152518101516080840152600360005543600155516200016791839101620006f3565b604051602081830303815290604052600290805190602001906200018d929190620002f7565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620001d6573d6000803e3d6000fd5b5060008080556001819055620001ef9060029062000386565b50565b604051806040016040528062000207620003c5565b81526020016200023160405180606001604052806000815260200160008152602001600081525090565b905290565b6040518060a0016040528060006001600160a01b03168152602001620002dc6040805161012081018252600060e08201818152610100830182905282528251808401845281815260208082018390528084019190915282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015260a08301829052835180850190945281845283015260c081019190915290565b81526020016000815260200160008152602001600081525090565b828054620003059062000741565b90600052602060002090601f01602090048101928262000329576000855562000374565b82601f106200034457805160ff191683800117855562000374565b8280016001018555821562000374579182015b828111156200037457825182559160200191906001019062000357565b506200038292915062000478565b5090565b508054620003949062000741565b6000825580601f10620003a5575050565b601f016020900490600052602060002090810190620001ef919062000478565b604051806060016040528060006001600160a01b031681526020016200046b6040805161012081018252600060e08201818152610100830182905282528251808401845281815260208082018390528084019190915282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015260a08301829052835180850190945281845283015260c081019190915290565b8152602001600081525090565b5b8082111562000382576000815560010162000479565b604080519081016001600160401b0381118282101715620004c057634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b0381118282101715620004c057634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620004c057634e487b7160e01b600052604160045260246000fd5b6000604082840312156200053b57600080fd5b620005456200048f565b9050815181526020820151602082015292915050565b60008183036101a08112156200057057600080fd5b6200057a6200048f565b83518152610180601f19830112156200059257600080fd5b6200059c620004c6565b9150620005a8620004f7565b620005b7866020870162000528565b8152620005c8866060870162000528565b602082015260a08501516040820152620005e68660c0870162000528565b6060820152620005fb86610100870162000528565b608082015261014085015160a08201526200061b86610160870162000528565b60c0820152825260208101919091529392505050565b6200064782825180518252602090810151910152565b6020818101518051604085015290810151606084015250604081015160808301526060810151805160a0840152602081015160c0840152506080810151805160e084015260208101516101008401525060a081015161012083015260c0015180516101408301526020015161016090910152565b60006101c08201905060018060a01b0384168252825160208301526020830151620006eb60408401825162000631565b509392505050565b81516001600160a01b031681526020808301516102008301916200071a9084018262000631565b5060408301516101a083015260608301516101c08301526080909201516101e09091015290565b600181811c908216806200075657607f821691505b602082108114156200077857634e487b7160e01b600052602260045260246000fd5b50919050565b611548806200078e6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b578063832307571461011c5780638a2d4b5f14610131578063ab53f2c614610144578063d2b1fa4d1461016757005b806316674bfa146100825780631e93b0f1146100ad5780633bc5b7bf146100cc5780634207e593146100f957005b3661008057005b005b34801561008e57600080fd5b5061009761016f565b6040516100a49190610e63565b60405180910390f35b3480156100b957600080fd5b506003545b6040519081526020016100a4565b3480156100d857600080fd5b506100ec6100e7366004610e87565b610188565b6040516100a49190610ed8565b61010c610107366004611035565b6101b4565b60405190151581526020016100a4565b34801561012857600080fd5b506001546100be565b61008061013f3660046110b5565b61024b565b34801561015057600080fd5b5061015961027b565b6040516100a49291906110ce565b61010c610318565b610177610add565b600061018281610351565b91505090565b60408051606081018252600080825260208201819052918101919091526101ae82610420565b92915050565b60006101be610b69565b6020818101805151600190528051516040908101518c905281515181015183018b905281515181015181018a905281515181015160600189905281515181015160800188905281515181015160a00187905290515181015160c001859052805180820190915260008082529181019190915261023a82826104f8565b602001519998505050505050505050565b60408051808201909152600080825260208201526102776102713684900384018461112b565b826104f8565b5050565b60006060600054600280805461029090611240565b80601f01602080910402602001604051908101604052809291908181526020018280546102bc90611240565b80156103095780601f106102de57610100808354040283529160200191610309565b820191906000526020600020905b8154815290600101906020018083116102ec57829003601f168201915b50505050509050915091509091565b6000610322610b69565b60208181015151600090819052604080518082019091528181529182015261034a82826104f8565b5192915050565b610359610add565b6003600054141561040f5760006002805461037390611240565b80601f016020809104026020016040519081016040528092919081815260200182805461039f90611240565b80156103ec5780601f106103c1576101008083540402835291602001916103ec565b820191906000526020600020905b8154815290600101906020018083116103cf57829003601f168201915b505050505080602001905181019061040491906112a5565b602001519392505050565b61041b600060076108e4565b919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561046c5761046c610ea4565b14156104e9576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156104ad576104ad610ea4565b60018111156104be576104be610ea4565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610508600360005414600c6108e4565b815161052390158061051c57508251600154145b600d6108e4565b60008080556002805461053590611240565b80601f016020809104026020016040519081016040528092919081815260200182805461056190611240565b80156105ae5780601f10610583576101008083540402835291602001916105ae565b820191906000526020600020905b81548152906001019060200180831161059157829003601f168201915b50505050508060200190518101906105c691906112a5565b90506105d0610b83565b7f55f5c51e8895c732723a52d81f7aedf8434e35459b5b9d5c0776ac2ac94fd6503385604051610601929190611389565b60405180910390a1600060208501515151600181111561062357610623610ea4565b14156107c25761063b8260800151836040015161090a565b8152604082015161064f90341460096108e4565b604051600081527f6e07b87fad764832472e928600fbf66de3316a329f23b14bb1d491b659954faa9060200160405180910390a160008352604082015181511415610729578051604051339180156108fc02916000818181858888f193505050501580156106c1573d6000803e3d6000fd5b506106ca610ba4565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101526060840151818301805191909152514391015281516107119080610957565b602082015160400152610723816109a6565b506108de565b61073b81600001518360600151610a8f565b60208201819052604051339180156108fc02916000818181858888f1935050505015801561076d573d6000803e3d6000fd5b50610776610ba4565b825181516001600160a01b039091169052602080840151825182015260408085015183519091015260608401518183018051919091525143908201528251908301516107119190610957565b60016020850151515160018111156107dc576107dc610ea4565b14156108de57602084015151604090810151828201819052838201519101516108079114600a6108e4565b61081c8160400151604001513414600b6108e4565b33600090815260046020908152604080832080546201000162ff00ff19909116179055519182527f72a1b3cbf5e57d9a9ea2945e59ff7bc334ba533d5a6341a997140a9cd69882bd910160405180910390a16000602084015261087d610ba4565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608301516108b6906001610957565b602080830180519290925290514391015260808301516040808401510151610711919061090a565b50505050565b816102775760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826109178382611475565b91508110156101ae5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610901565b600082610964838261148d565b91508111156101ae5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610901565b60208101515115610a32576109b9610be0565b8151516001600160a01b03168152815160209081015181830152825160409081015181840152818401805151606085015251810151608084015260036000554360015551610a09918391016114a4565b60405160208183030381529060405260029080519060200190610a2d929190610c1e565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a75573d6000803e3d6000fd5b5060008080556001819055610a8c90600290610ca2565b50565b600081610acc5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401610901565b610ad682846114f0565b9392505050565b6040805161012081018252600060e08201818152610100830182905282528251808401845281815260208082018390528084019190915282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015260a08301829052835180850190945281845283015260c081019190915290565b905290565b604051806040016040528060008152602001610b64610cdc565b60405180606001604052806000815260200160008152602001610b64610cef565b6040518060400160405280610bb7610d76565b8152602001610b6460405180606001604052806000815260200160008152602001600081525090565b6040518060a0016040528060006001600160a01b03168152602001610c03610add565b81526020016000815260200160008152602001600081525090565b828054610c2a90611240565b90600052602060002090601f016020900481019282610c4c5760008555610c92565b82601f10610c6557805160ff1916838001178555610c92565b82800160010185558215610c92579182015b82811115610c92578251825591602001919060010190610c77565b50610c9e929150610da6565b5090565b508054610cae90611240565b6000825580601f10610cbe575050565b601f016020900490600052602060002090810190610a8c9190610da6565b6040518060200160405280610b64610dbb565b6040805161012081018252600060e082018181526101008301829052825282518084018452818152602080820183905280840191909152828401829052606083018290528351808501855282815280820183905260808401528351808501855282815280820183905260a0840152835180850190945281845283015260c081019190915290565b604051806060016040528060006001600160a01b03168152602001610d99610add565b8152602001600081525090565b5b80821115610c9e5760008155600101610da7565b6040805160608101825260008082526020820152908101610b64610cef565b610def82825180518252602090810151910152565b6020818101518051604085015290810151606084015250604081015160808301526060810151805160a0840152602081015160c0840152506080810151805160e084015260208101516101008401525060a081015161012083015260c0015180516101408301526020015161016090910152565b61018081016101ae8284610dda565b6001600160a01b0381168114610a8c57600080fd5b600060208284031215610e9957600080fd5b8135610ad681610e72565b634e487b7160e01b600052602160045260246000fd5b60028110610a8c57634e487b7160e01b600052602160045260246000fd5b81516060820190610ee881610eba565b8083525060208301511515602083015260408301511515604083015292915050565b6040805190810167ffffffffffffffff81118282101715610f3b57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610f3b57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610f3b57634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610f3b57634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610f3b57634e487b7160e01b600052604160045260246000fd5b60006040828403121561101757600080fd5b61101f610f0a565b9050813581526020820135602082015292915050565b6000806000806000806000610180888a03121561105157600080fd5b61105b8989611005565b965061106a8960408a01611005565b95506080880135945060a088013593506110878960c08a01611005565b9250611097896101008a01611005565b91506110a7896101408a01611005565b905092959891949750929550565b60006101e082840312156110c857600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015611102578581018301518582016060015282016110e6565b81811115611114576000606083870101525b50601f01601f191692909201606001949350505050565b60008183036101e081121561113f57600080fd5b611147610f0a565b833581526101c0601f198301121561115e57600080fd5b611166610f41565b61116e610f72565b60208601356002811061118057600080fd5b81526040860135801515811461119557600080fd5b6020820152610180605f19850112156111ad57600080fd5b6111b5610fa3565b93506111c48760608801611005565b84526111d38760a08801611005565b602085015260e0860135604085015261010086013560608501526111fb876101208801611005565b608085015261120e876101608801611005565b60a0850152611221876101a08801611005565b60c0850152604081019390935291825260208101919091529392505050565b600181811c9082168061125457607f821691505b602082108114156110c857634e487b7160e01b600052602260045260246000fd5b60006040828403121561128757600080fd5b61128f610f0a565b9050815181526020820151602082015292915050565b60008183036102008112156112b957600080fd5b6112c1610fd4565b83516112cc81610e72565b8152610180601f19830112156112e157600080fd5b6112e9610fa3565b91506112f88560208601611275565b82526113078560608601611275565b602083015260a084015160408301526113238560c08601611275565b6060830152611336856101008601611275565b608083015261014084015160a0830152611354856101608601611275565b60c083015260208101919091526101a083015160408201526101c083015160608201526101e090920151608083015250919050565b6001600160a01b03831681528151602080830191909152820151518051610200830191906113b681610eba565b604084810191909152602082810151151560608601529101518051805160808601529091015160a0840152602081810151805160c08601529081015160e085015250604081015161010084015260608101516101208401526080810151805161014085015260208101516101608501525060a0810151805161018085015260208101516101a08501525060c0015180516101c084015260208101516101e0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156114885761148861145f565b500190565b60008282101561149f5761149f61145f565b500390565b81516001600160a01b031681526020808301516102008301916114c990840182610dda565b5060408301516101a083015260608301516101c08301526080909201516101e09091015290565b60008261150d57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206a0d6d17a0c4cdc24b3f4c0074d391c0a20710d17ed49fe8fcfcaf94f02a522b64736f6c634300080c0033`,
  BytecodeLen: 7382,
  Which: `oD`,
  version: 7,
  views: {
    Info: {
      details: `Info_details`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:116:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:39:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Attendee_checkIn": Attendee_checkIn,
  "Attendee_rsvpForEvent": Attendee_rsvpForEvent
  };
export const _APIs = {
  Attendee: {
    checkIn: Attendee_checkIn,
    rsvpForEvent: Attendee_rsvpForEvent
    }
  };
