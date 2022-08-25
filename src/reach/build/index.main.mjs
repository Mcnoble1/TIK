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
      const [v290, v291, v296, v309, v313] = svs;
      return (await ((async () => {
        
        
        return v291;}))(...args));
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
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc4, ctc4, ctc3, ctc3, ctc3]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v280 = stdlib.protect(ctc5, interact.createEvent, 'for Admin\'s interact field createEvent');
  
  const txn1 = await (ctc.sendrecv({
    args: [v280],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:124:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:124:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v291], secs: v293, time: v292, didSend: v34, from: v290 } = txn1;
      
      ;
      const v296 = v291.fee;
      const v297 = v291.tickets;
      
      const v309 = v297;
      const v310 = v292;
      const v313 = stdlib.checkedBigNumberify('./index.rsh:118:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v316 = stdlib.gt(v309, stdlib.checkedBigNumberify('./index.rsh:136:23:decimal', stdlib.UInt_max, '0'));
        
        return v316;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v290,
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
  const {data: [v291], secs: v293, time: v292, didSend: v34, from: v290 } = txn1;
  ;
  const v296 = v291.fee;
  const v297 = v291.tickets;
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:132:23:application',
    fs: ['at ./index.rsh:132:23:application call to [unknown function] (defined at: ./index.rsh:132:23:function exp)', 'at ./index.rsh:132:23:application call to "liftedInteract" (defined at: ./index.rsh:132:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v309 = v297;
  let v310 = v292;
  let v313 = stdlib.checkedBigNumberify('./index.rsh:118:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v316 = stdlib.gt(v309, stdlib.checkedBigNumberify('./index.rsh:136:23:decimal', stdlib.UInt_max, '0'));
    
    return v316;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v355], secs: v357, time: v356, didSend: v208, from: v354 } = txn2;
    undefined /* setApiDetails */;
    const v361 = v355[stdlib.checkedBigNumberify('./index.rsh:137:8:spread', stdlib.UInt_max, '2')];
    const v366 = stdlib.eq(v361, v296);
    stdlib.assert(v366, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:84:application call to [unknown function] (defined at: ./index.rsh:137:84:function exp)', 'at ./index.rsh:137:84:application call to [unknown function] (defined at: ./index.rsh:137:84:function exp)'],
      msg: 'Fee can\'t be zero',
      who: 'Admin'
      });
    const v369 = stdlib.safeAdd(v313, v361);
    ;
    await stdlib.mapSet(map0, v354, true);
    const v386 = null;
    await txn2.getOutput('Attendee_rsvpForEvent', 'v386', ctc0, v386);
    stdlib.protect(ctc0, await interact.seeRSVP(v354), {
      at: './index.rsh:145:29:application',
      fs: ['at ./index.rsh:145:29:application call to [unknown function] (defined at: ./index.rsh:145:29:function exp)', 'at ./index.rsh:145:29:application call to "liftedInteract" (defined at: ./index.rsh:145:29:application)', 'at ./index.rsh:141:28:application call to [unknown function] (defined at: ./index.rsh:141:28:function exp)'],
      msg: 'seeRSVP',
      who: 'Admin'
      });
    
    const v400 = stdlib.safeSub(v309, stdlib.checkedBigNumberify('./index.rsh:147:29:decimal', stdlib.UInt_max, '1'));
    const cv309 = v400;
    const cv310 = v356;
    const cv313 = v369;
    
    v309 = cv309;
    v310 = cv310;
    v313 = cv313;
    
    continue;
    
    }
  ;
  return;
  
  
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
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v290, v291, v296, v309, v313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc6, ctc5, ctc5, ctc5]);
  const v319 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:137:84:application call to [unknown function] (defined at: ./index.rsh:137:84:function exp)', 'at ./index.rsh:137:84:application call to [unknown function] (defined at: ./index.rsh:137:84:function exp)'],
    msg: 'in',
    who: 'Attendee_rsvpForEvent'
    });
  const v322 = v319[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v334 = stdlib.eq(v322, v296);
  stdlib.assert(v334, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:84:application call to [unknown function] (defined at: ./index.rsh:137:84:function exp)', 'at ./index.rsh:137:84:application call to [unknown function] (defined at: ./index.rsh:137:84:function exp)'],
    msg: 'Fee can\'t be zero',
    who: 'Attendee_rsvpForEvent'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v290, v291, v296, v309, v313, v319],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v322, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v355], secs: v357, time: v356, didSend: v208, from: v354 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Attendee_rsvpForEvent"
        });
      const v361 = v355[stdlib.checkedBigNumberify('./index.rsh:137:8:spread', stdlib.UInt_max, '2')];
      const v369 = stdlib.safeAdd(v313, v361);
      sim_r.txns.push({
        amt: v361,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v354, true);
      const v386 = null;
      const v387 = await txn1.getOutput('Attendee_rsvpForEvent', 'v386', ctc0, v386);
      
      const v400 = stdlib.safeSub(v309, stdlib.checkedBigNumberify('./index.rsh:147:29:decimal', stdlib.UInt_max, '1'));
      const v460 = v400;
      const v462 = v369;
      const v463 = stdlib.gt(v400, stdlib.checkedBigNumberify('./index.rsh:136:23:decimal', stdlib.UInt_max, '0'));
      if (v463) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v290,
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
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc6, ctc5, ctc5, ctc5, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v355], secs: v357, time: v356, didSend: v208, from: v354 } = txn1;
  undefined /* setApiDetails */;
  const v361 = v355[stdlib.checkedBigNumberify('./index.rsh:137:8:spread', stdlib.UInt_max, '2')];
  const v366 = stdlib.eq(v361, v296);
  stdlib.assert(v366, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:84:application call to [unknown function] (defined at: ./index.rsh:137:84:function exp)', 'at ./index.rsh:137:84:application call to [unknown function] (defined at: ./index.rsh:137:84:function exp)'],
    msg: 'Fee can\'t be zero',
    who: 'Attendee_rsvpForEvent'
    });
  const v369 = stdlib.safeAdd(v313, v361);
  ;
  await stdlib.mapSet(map0, v354, true);
  const v386 = null;
  const v387 = await txn1.getOutput('Attendee_rsvpForEvent', 'v386', ctc0, v386);
  if (v208) {
    stdlib.protect(ctc0, await interact.out(v355, v387), {
      at: './index.rsh:137:9:application',
      fs: ['at ./index.rsh:137:9:application call to [unknown function] (defined at: ./index.rsh:137:9:function exp)', 'at ./index.rsh:143:13:application call to "notify" (defined at: ./index.rsh:141:28:function exp)', 'at ./index.rsh:141:28:application call to [unknown function] (defined at: ./index.rsh:141:28:function exp)'],
      msg: 'out',
      who: 'Attendee_rsvpForEvent'
      });
    }
  else {
    }
  
  const v400 = stdlib.safeSub(v309, stdlib.checkedBigNumberify('./index.rsh:147:29:decimal', stdlib.UInt_max, '1'));
  const v460 = v400;
  const v462 = v369;
  const v463 = stdlib.gt(v400, stdlib.checkedBigNumberify('./index.rsh:136:23:decimal', stdlib.UInt_max, '0'));
  if (v463) {
    return;
    }
  else {
    ;
    return;
    }
  
  
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
    impure: [`Attendee_rsvpForEvent(byte[64],byte[64],uint64,uint64,byte[64],byte[64],byte[64])byte[0]`],
    pure: [`Info_details()(byte[64],byte[64],uint64,byte[64],byte[64],uint64,byte[64])`],
    sigs: [`Attendee_rsvpForEvent(byte[64],byte[64],uint64,uint64,byte[64],byte[64],byte[64])byte[0]`, `Info_details()(byte[64],byte[64],uint64,byte[64],byte[64],uint64,byte[64])`]
    },
  appApproval: `BiAJAAEDxMGT/Q8g0AICgAEFJgUBAAABAQECAQMiNQAxGEEB/ylkSSJbNQGBCFs1AjEZIxJBAAsxACiAAgAAZkIByjYaABdJQQBTIjUEIzUGSSUMQAAhJRJENAEkEkQoZCpkUCtkUCcEZFBJNQMhBCEFWDUHQgGkgYnLpIQOEkQ2GgE2GgJQNhoDUDYaBFA2GgVQNhoGUDYaB1BCABg2GgIXNQQ2GgM2GgEXSSEGDEAAgyEGEkQkNAESRDQESSISTDQCEhFEKGQqZFArZFAnBGRQSTUDgfACWzX/STUFNf6ABKKCEjU0/lCwNP4hB1tJNf00/xJENP2IAUcxACiAAgEBZoAIAAAAAAAAAYKwKTUHNANXACA0AyEEIQVYNP80A4H4AlsjCTIGNAOBgANbNP0IQgA9IhJEgaCNBogBAyI0ARJENARJIhJMNAISEURJNQU1/4AEpdSENTT/ULAxADT/SSEHWzT/gYgCWzIGIkIAADX/Nf41/TX8Nfs1+jT9Ig1BADw0+jT7UDT8FlA0/RZQNP8WUChLAVcAf2cqSwFXf39nK0sBV/5/ZycESwGB/QKBC1hnSCQ1ATIGNQJCAC+xIrIBNP+yCCOyEDT6sgezQgAAMRkhCBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEIMTUSRCIxNhJEIzE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v291",
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
                "name": "v291",
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
                "name": "v355",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
    "name": "_reach_oe_v386",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
                "name": "v355",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
  Bytecode: `0x6080604052604051620018fb380380620018fb83398101604081905262000026916200055b565b60008055436003556040517f0bd289e75a1fe11a45e8eb70f6f50625499201f0423faf5c258f81f6e2290be490620000629033908490620006bb565b60405180910390a16200007834156008620000d5565b62000082620001f2565b805133905260208083018051518351830152805151604090810151845182015290515160a0015182840180519190915280514393019290925290516000910152620000cd81620000ff565b50506200077e565b81620000fb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6020810151511562000192576200011562000236565b8151516001600160a01b031681528151602090810151818301528251604090810151818401528184018051516060850152518101516080840152600360005543600155516200016791839101620006f3565b604051602081830303815290604052600290805190602001906200018d929190620002f7565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620001d6573d6000803e3d6000fd5b5060008080556001819055620001ef9060029062000386565b50565b604051806040016040528062000207620003c5565b81526020016200023160405180606001604052806000815260200160008152602001600081525090565b905290565b6040518060a0016040528060006001600160a01b03168152602001620002dc6040805161012081018252600060e08201818152610100830182905282528251808401845281815260208082018390528084019190915282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015260a08301829052835180850190945281845283015260c081019190915290565b81526020016000815260200160008152602001600081525090565b828054620003059062000741565b90600052602060002090601f01602090048101928262000329576000855562000374565b82601f106200034457805160ff191683800117855562000374565b8280016001018555821562000374579182015b828111156200037457825182559160200191906001019062000357565b506200038292915062000478565b5090565b508054620003949062000741565b6000825580601f10620003a5575050565b601f016020900490600052602060002090810190620001ef919062000478565b604051806060016040528060006001600160a01b031681526020016200046b6040805161012081018252600060e08201818152610100830182905282528251808401845281815260208082018390528084019190915282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015260a08301829052835180850190945281845283015260c081019190915290565b8152602001600081525090565b5b8082111562000382576000815560010162000479565b604080519081016001600160401b0381118282101715620004c057634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b0381118282101715620004c057634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620004c057634e487b7160e01b600052604160045260246000fd5b6000604082840312156200053b57600080fd5b620005456200048f565b9050815181526020820151602082015292915050565b60008183036101a08112156200057057600080fd5b6200057a6200048f565b83518152610180601f19830112156200059257600080fd5b6200059c620004c6565b9150620005a8620004f7565b620005b7866020870162000528565b8152620005c8866060870162000528565b602082015260a08501516040820152620005e68660c0870162000528565b6060820152620005fb86610100870162000528565b608082015261014085015160a08201526200061b86610160870162000528565b60c0820152825260208101919091529392505050565b6200064782825180518252602090810151910152565b6020818101518051604085015290810151606084015250604081015160808301526060810151805160a0840152602081015160c0840152506080810151805160e084015260208101516101008401525060a081015161012083015260c0015180516101408301526020015161016090910152565b60006101c08201905060018060a01b0384168252825160208301526020830151620006eb60408401825162000631565b509392505050565b81516001600160a01b031681526020808301516102008301916200071a9084018262000631565b5060408301516101a083015260608301516101c08301526080909201516101e09091015290565b600181811c908216806200075657607f821691505b602082108114156200077857634e487b7160e01b600052602260045260246000fd5b50919050565b61116d806200078e6000396000f3fe60806040526004361061006e5760003560e01c80634207e5931161004b5780634207e593146100ee5780638323075714610111578063ab53f2c614610126578063cd058e641461014957005b806316674bfa146100775780631e93b0f1146100a25780633bc5b7bf146100c157005b3661007557005b005b34801561008357600080fd5b5061008c61015c565b6040516100999190610c05565b60405180910390f35b3480156100ae57600080fd5b506003545b604051908152602001610099565b3480156100cd57600080fd5b506100e16100dc366004610c29565b610175565b6040516100999190610c63565b6101016100fc366004610da4565b6101a1565b6040519015158152602001610099565b34801561011d57600080fd5b506001546100b3565b34801561013257600080fd5b5061013b610210565b604051610099929190610e24565b610075610157366004610e81565b6102ad565b6101646108ce565b600061016f816102d8565b91505090565b604080516060810182526000808252602082018190529181019190915261019b826103a7565b92915050565b60006101ab61095a565b60208082018051518b905280515182018a905280515160409081018a905281515160600189905281515160800188905281515160a00187905290515160c0018590528051918201905260008152610202828261047f565b519998505050505050505050565b60006060600054600280805461022590610e9a565b80601f016020809104026020016040519081016040528092919081815260200182805461025190610e9a565b801561029e5780601f106102735761010080835404028352916020019161029e565b820191906000526020600020905b81548152906001019060200180831161028157829003601f168201915b50505050509050915091509091565b6040805160208101909152600081526102d46102ce36849003840184610ecf565b8261047f565b5050565b6102e06108ce565b60036000541415610396576000600280546102fa90610e9a565b80601f016020809104026020016040519081016040528092919081815260200182805461032690610e9a565b80156103735780601f1061034857610100808354040283529160200191610373565b820191906000526020600020905b81548152906001019060200180831161035657829003601f168201915b505050505080602001905181019061038b9190610fc2565b602001519392505050565b6103a260006007610723565b919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156103f3576103f3610c4d565b1415610470576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561043457610434610c4d565b600181111561044557610445610c4d565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b61048f600360005414600b610723565b81516104aa9015806104a357508251600154145b600c610723565b6000808055600280546104bc90610e9a565b80601f01602080910402602001604051908101604052809291908181526020018280546104e890610e9a565b80156105355780601f1061050a57610100808354040283529160200191610535565b820191906000526020600020905b81548152906001019060200180831161051857829003601f168201915b505050505080602001905181019061054d9190610fc2565b604080513381528551602080830191909152808701515180518051848601528201516060808501919091528183015180516080808701919091529084015160a0808701919091528387015160c0808801919091529284015160e087015290830151805161010087015284015161012086015282015180516101408601528301516101608501520151805161018084015201516101a082015290519192507f8a27f396e120ca3dbb01af2d4b422f9cb42d10dea376bbe4aa83e7f535f76cb891908190036101c00190a1610633816040015184602001516000015160400151146009610723565b6020830151516040015161064a903414600a610723565b33600090815260046020908152604080832080546201000162ff00ff19909116179055519182527f09eac39cce54dda4f1b87660d478867c00ef58012371562edac8d183780dd3ef910160405180910390a1600082526106a86109ff565b815181516001600160a01b03909116905260208083015182519091015260408083015182519091015260608201516106e1906001610749565b602080830180519290925290514390820152608083015190850151516040015161070b9190610798565b60208201516040015261071d816107e5565b50505050565b816102d45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261075683826110bc565b915081111561019b5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610740565b6000826107a583826110d3565b915081101561019b5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610740565b60208101515115610871576107f8610a3b565b8151516001600160a01b03168152815160209081015181830152825160409081015181840152818401805151606085015251810151608084015260036000554360015551610848918391016110eb565b6040516020818303038152906040526002908051906020019061086c929190610a79565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108b4573d6000803e3d6000fd5b50600080805560018190556108cb90600290610afd565b50565b6040805161012081018252600060e08201818152610100830182905282528251808401845281815260208082018390528084019190915282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015260a08301829052835180850190945281845283015260c081019190915290565b905290565b60405180604001604052806000815260200161095560408051610140810182526000610100820181815261012083018290526020808401918252845180860186528381528082018490528486015260608401839052608084018390528451808601865283815280820184905260a08501528451808601865283815280820184905260c0850152845180860190955282855284019190915260e082019290925290815290565b6040518060400160405280610a12610b37565b815260200161095560405180606001604052806000815260200160008152602001600081525090565b6040518060a0016040528060006001600160a01b03168152602001610a5e6108ce565b81526020016000815260200160008152602001600081525090565b828054610a8590610e9a565b90600052602060002090601f016020900481019282610aa75760008555610aed565b82601f10610ac057805160ff1916838001178555610aed565b82800160010185558215610aed579182015b82811115610aed578251825591602001919060010190610ad2565b50610af9929150610b67565b5090565b508054610b0990610e9a565b6000825580601f10610b19575050565b601f0160209004906000526020600020908101906108cb9190610b67565b604051806060016040528060006001600160a01b03168152602001610b5a6108ce565b8152602001600081525090565b5b80821115610af95760008155600101610b68565b610b9182825180518252602090810151910152565b6020818101518051604085015290810151606084015250604081015160808301526060810151805160a0840152602081015160c0840152506080810151805160e084015260208101516101008401525060a081015161012083015260c0015180516101408301526020015161016090910152565b610180810161019b8284610b7c565b6001600160a01b03811681146108cb57600080fd5b600060208284031215610c3b57600080fd5b8135610c4681610c14565b9392505050565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110610c8857634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b6040805190810167ffffffffffffffff81118282101715610cdb57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610cdb57634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715610cdb57634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715610cdb57634e487b7160e01b600052604160045260246000fd5b600060408284031215610d8657600080fd5b610d8e610caa565b9050813581526020820135602082015292915050565b6000806000806000806000610180888a031215610dc057600080fd5b610dca8989610d74565b9650610dd98960408a01610d74565b95506080880135945060a08801359350610df68960c08a01610d74565b9250610e06896101008a01610d74565b9150610e16896101408a01610d74565b905092959891949750929550565b82815260006020604081840152835180604085015260005b81811015610e5857858101830151858201606001528201610e3c565b81811115610e6a576000606083870101525b50601f01601f191692909201606001949350505050565b60006101a08284031215610e9457600080fd5b50919050565b600181811c90821680610eae57607f821691505b60208210811415610e9457634e487b7160e01b600052602260045260246000fd5b60008183036101a0811215610ee357600080fd5b610eeb610caa565b83358152610180601f1983011215610f0257600080fd5b610f0a610ce1565b9150610f14610d12565b610f218660208701610d74565b8152610f308660608701610d74565b602082015260a0850135604082015260c08501356060820152610f568660e08701610d74565b6080820152610f69866101208701610d74565b60a0820152610f7c866101608701610d74565b60c0820152825260208101919091529392505050565b600060408284031215610fa457600080fd5b610fac610caa565b9050815181526020820151602082015292915050565b6000818303610200811215610fd657600080fd5b610fde610d43565b8351610fe981610c14565b8152610180601f1983011215610ffe57600080fd5b611006610d12565b91506110158560208601610f92565b82526110248560608601610f92565b602083015260a084015160408301526110408560c08601610f92565b6060830152611053856101008601610f92565b608083015261014084015160a0830152611071856101608601610f92565b60c083015260208101919091526101a083015160408201526101c083015160608201526101e090920151608083015250919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110ce576110ce6110a6565b500390565b600082198211156110e6576110e66110a6565b500190565b81516001600160a01b0316815260208083015161020083019161111090840182610b7c565b5060408301516101a083015260608301516101c08301526080909201516101e0909101529056fea2646970667358221220675850de739759108920d901938c9008c8c8b00f53cbc73f4a348bc44c709df364736f6c634300080c0033`,
  BytecodeLen: 6395,
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
    at: './index.rsh:176:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:134:38:after expr stmt semicolon',
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
  "Attendee_rsvpForEvent": Attendee_rsvpForEvent
  };
export const _APIs = {
  Attendee: {
    rsvpForEvent: Attendee_rsvpForEvent
    }
  };
