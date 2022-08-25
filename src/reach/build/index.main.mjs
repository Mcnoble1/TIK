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
  
  const Info_details = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v106, v107, v112] = svs;
      return (await ((async () => {
        
        
        return v107;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v106, v107, v112, v126] = svs;
      return (await ((async () => {
        
        
        return v107;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v106, v107, v112, v126] = svs;
      return (await ((async () => {
        
        
        return v107;}))(...args));
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
      1: [ctc0, ctc3, ctc2],
      2: [ctc0, ctc3, ctc2, ctc0],
      3: [ctc0, ctc3, ctc2, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    date: ctc0,
    description: ctc0,
    fee: ctc1,
    location: ctc0,
    organizer: ctc0,
    tickets: ctc1,
    title: ctc0
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v96 = stdlib.protect(ctc2, interact.createEvent, 'for Admin\'s interact field createEvent');
  
  const txn1 = await (ctc.sendrecv({
    args: [v96],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:119:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:119:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v107], secs: v109, time: v108, didSend: v34, from: v106 } = txn1;
      
      ;
      const v112 = v107.fee;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v34, from: v106 } = txn1;
  ;
  const v112 = v107.fee;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v128, time: v127, didSend: v57, from: v126 } = txn2;
  ;
  stdlib.protect(ctc3, await interact.seeRSVP(v126), {
    at: './index.rsh:137:25:application',
    fs: ['at ./index.rsh:137:25:application call to [unknown function] (defined at: ./index.rsh:137:25:function exp)', 'at ./index.rsh:137:25:application call to "liftedInteract" (defined at: ./index.rsh:137:25:application)'],
    msg: 'seeRSVP',
    who: 'Admin'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v135], secs: v137, time: v136, didSend: v70, from: v134 } = txn3;
  ;
  const v138 = stdlib.addressEq(v126, v134);
  stdlib.assert(v138, {
    at: './index.rsh:142:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc3, await interact.manageFunds(), {
    at: './index.rsh:146:56:application',
    fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:17:function exp)'],
    msg: 'manageFunds',
    who: 'Admin'
    });
  stdlib.protect(ctc3, await interact.confirmGuest(v126), {
    at: './index.rsh:147:58:application',
    fs: ['at ./index.rsh:145:13:application call to [unknown function] (defined at: ./index.rsh:145:17:function exp)'],
    msg: 'confirmGuest',
    who: 'Admin'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v106, v107, v112, v126, null, null],
    evt_cnt: 2,
    funcNum: 3,
    lct: v136,
    onlyIf: true,
    out_tys: [ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:149:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v142, v143], secs: v145, time: v144, didSend: v80, from: v141 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v126,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc1, ctc4, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v142, v143], secs: v145, time: v144, didSend: v80, from: v141 } = txn4;
  ;
  const v146 = stdlib.addressEq(v106, v141);
  stdlib.assert(v146, {
    at: './index.rsh:149:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  ;
  return;
  
  
  
  
  
  
  
  
  };
export async function Attendee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    date: ctc0,
    description: ctc0,
    fee: ctc1,
    location: ctc0,
    organizer: ctc0,
    tickets: ctc1,
    title: ctc0
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v34, from: v106 } = txn1;
  ;
  const v110 = v107.title;
  const v111 = v107.location;
  const v112 = v107.fee;
  const v113 = v107.tickets;
  const v114 = v107.organizer;
  const v115 = v107.date;
  const v116 = v107.description;
  stdlib.protect(ctc3, await interact.rsvpForEvent(v110, v111, v112, v113, v114, v115, v116), {
    at: './index.rsh:131:26:application',
    fs: ['at ./index.rsh:130:16:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
    msg: 'rsvpForEvent',
    who: 'Attendee'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v106, v107, v112],
    evt_cnt: 0,
    funcNum: 1,
    lct: v108,
    onlyIf: true,
    out_tys: [],
    pay: [v112, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v128, time: v127, didSend: v57, from: v126 } = txn2;
      
      sim_r.txns.push({
        amt: v112,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v128, time: v127, didSend: v57, from: v126 } = txn2;
  ;
  stdlib.protect(ctc3, await interact.checkIn(), {
    at: './index.rsh:140:48:application',
    fs: ['at ./index.rsh:139:16:application call to [unknown function] (defined at: ./index.rsh:139:20:function exp)'],
    msg: 'checkIn',
    who: 'Attendee'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v106, v107, v112, v126, null],
    evt_cnt: 1,
    funcNum: 2,
    lct: v127,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:142:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v135], secs: v137, time: v136, didSend: v70, from: v134 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc1, ctc4, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v135], secs: v137, time: v136, didSend: v70, from: v134 } = txn3;
  ;
  const v138 = stdlib.addressEq(v126, v134);
  stdlib.assert(v138, {
    at: './index.rsh:142:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attendee'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v142, v143], secs: v145, time: v144, didSend: v80, from: v141 } = txn4;
  ;
  const v146 = stdlib.addressEq(v106, v141);
  stdlib.assert(v146, {
    at: './index.rsh:149:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attendee'
    });
  ;
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`Info_details()(byte[64],byte[64],uint64,byte[64],byte[64],uint64,byte[64])`],
    sigs: [`Info_details()(byte[64],byte[64],uint64,byte[64],byte[64],uint64,byte[64])`]
    },
  appApproval: `BiALAAEgA9ACAvAC+AL9AhsFJgUBAAEBAQIBAwAiNQAxGEEClCcEZEkiWzUBgQhbNQI2GgAXSUEAZiI1BCM1BoHEwZP9DxJENAFJIQUMQAA4SSUMQAAaJRJEKGQpZFAqZFArZFBJNQMkIQRYNQdCAkBIKGQpZFAqZFArZFBJNQMkIQRYNQdCAigjEkQoZClkUCpkUEk1AyQhBFg1B0ICETYaAhc1BDYaAzYaARdJIQUMQADmSSUMQABeJRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQNQNJNQVJSCcENf9IJwQ1/oAESUs25zT/UDT+ULA0A1cAIDEAEkSxIrIBNAMhBluyCCOyEDQDIQckWLIHs0IBUEghBTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDSUpXACA1/yQhBFg1/iEGWzX9IQckWDX8STUFNfuABBxPU280+1CwNPwxABJENP80/lA0/RZQNPxQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIQghCVhnSCU1ATIGNQJCAOpJIwxAAHBIIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUlXACA1/yQhBFg1/iEGWzX9gASai5F0sDT9iAD9NP80/lA0/RZQMQBQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIQghCVhnSCEFNQEyBjUCQgB0SIGgjQaIAL8iNAESRDQESSISTDQCEhFESTUFNf+ABKXUhDU0/1CwNP+BgAFbNf4xADT/UDT+FlAoSwFXAH9nKUsBV39/ZypLAVf+emdIIzUBMgY1AkIAHDEZIQoSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcENAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQoxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 4,
  stateSize: 408,
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T1",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T2",
                "name": "v107",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T1",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T2",
                "name": "v107",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "internalType": "bool",
                "name": "v135",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
                "internalType": "bool",
                "name": "v142",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v143",
                "type": "bool"
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
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
            "internalType": "struct T1",
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
            "internalType": "struct T1",
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
            "internalType": "struct T1",
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
            "internalType": "struct T1",
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
            "internalType": "struct T1",
            "name": "_title",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
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
                "internalType": "bool",
                "name": "v135",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
                "internalType": "bool",
                "name": "v142",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v143",
                "type": "bool"
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
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620013cd380380620013cd833981016040819052620000269162000334565b60008055436003556040517f0bd289e75a1fe11a45e8eb70f6f50625499201f0423faf5c258f81f6e2290be49062000062903390849062000494565b60405180910390a16200007834156008620000e5565b620000826200010f565b3381526020808301805151828401525151604090810151818401526001600081905543905551620000b691839101620004cc565b60405160208183030381529060405260029080519060200190620000dc929190620001c2565b50505062000542565b816200010b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604051806060016040528060006001600160a01b03168152602001620001b56040805161012081018252600060e08201818152610100830182905282528251808401845281815260208082018390528084019190915282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015260a08301829052835180850190945281845283015260c081019190915290565b8152602001600081525090565b828054620001d09062000505565b90600052602060002090601f016020900481019282620001f457600085556200023f565b82601f106200020f57805160ff19168380011785556200023f565b828001600101855582156200023f579182015b828111156200023f57825182559160200191906001019062000222565b506200024d92915062000251565b5090565b5b808211156200024d576000815560010162000252565b604080519081016001600160401b03811182821017156200029957634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200029957634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156200029957634e487b7160e01b600052604160045260246000fd5b6000604082840312156200031457600080fd5b6200031e62000268565b9050815181526020820151602082015292915050565b60008183036101a08112156200034957600080fd5b6200035362000268565b83518152610180601f19830112156200036b57600080fd5b620003756200029f565b915062000381620002d0565b62000390866020870162000301565b8152620003a1866060870162000301565b602082015260a08501516040820152620003bf8660c0870162000301565b6060820152620003d486610100870162000301565b608082015261014085015160a0820152620003f486610160870162000301565b60c0820152825260208101919091529392505050565b6200042082825180518252602090810151910152565b6020818101518051604085015290810151606084015250604081015160808301526060810151805160a0840152602081015160c0840152506080810151805160e084015260208101516101008401525060a081015161012083015260c0015180516101408301526020015161016090910152565b60006101c08201905060018060a01b0384168252825160208301526020830151620004c46040840182516200040a565b509392505050565b81516001600160a01b031681526020808301516101c0830191620004f3908401826200040a565b5060408301516101a083015292915050565b600181811c908216806200051a57607f821691505b602082108114156200053c57634e487b7160e01b600052602260045260246000fd5b50919050565b610e7b80620005526000396000f3fe60806040526004361061006e5760003560e01c80633e59bac41161004b5780633e59bac4146100d457806383230757146100e7578063ab53f2c6146100fc578063d8f73b821461011f57005b806316674bfa146100775780631e93b0f1146100a25780632c10a159146100c157005b3661007557005b005b34801561008357600080fd5b5061008c610132565b6040516100999190610a4f565b60405180910390f35b3480156100ae57600080fd5b506003545b604051908152602001610099565b6100756100cf366004610a7c565b61014b565b6100756100e2366004610a7c565b6102d3565b3480156100f357600080fd5b506001546100b3565b34801561010857600080fd5b50610111610454565b604051610099929190610a9f565b61007561012d366004610afc565b6104f1565b61013a610832565b600061014581610679565b91505090565b61015b600160005414600a61080d565b6101758135158061016e57506001548235145b600b61080d565b60008080556002805461018790610b0e565b80601f01602080910402602001604051908101604052809291908181526020018280546101b390610b0e565b80156102005780601f106101d557610100808354040283529160200191610200565b820191906000526020600020905b8154815290600101906020018083116101e357829003601f168201915b50505050508060200190518101906102189190610c72565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161024b929190610cf9565b60405180910390a161026481604001513414600961080d565b61026c6108b9565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152600260005543600155516102a991839101610d2e565b604051602081830303815290604052600290805190602001906102cd9291906108f0565b50505050565b6102e3600260005414600e61080d565b6102fd813515806102f657506001548235145b600f61080d565b60008080556002805461030f90610b0e565b80601f016020809104026020016040519081016040528092919081815260200182805461033b90610b0e565b80156103885780601f1061035d57610100808354040283529160200191610388565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b50505050508060200190518101906103a09190610d75565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33836040516103d3929190610cf9565b60405180910390a16103e73415600c61080d565b6060810151610402906001600160a01b03163314600d61080d565b61040a6108b9565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601519093169284019290925260036000554360015590516102a991839101610d2e565b60006060600054600280805461046990610b0e565b80601f016020809104026020016040519081016040528092919081815260200182805461049590610b0e565b80156104e25780601f106104b7576101008083540402835291602001916104e2565b820191906000526020600020905b8154815290600101906020018083116104c557829003601f168201915b50505050509050915091509091565b610501600360005414601261080d565b61051b8135158061051457506001548235145b601361080d565b60008080556002805461052d90610b0e565b80601f016020809104026020016040519081016040528092919081815260200182805461055990610b0e565b80156105a65780601f1061057b576101008083540402835291602001916105a6565b820191906000526020600020905b81548152906001019060200180831161058957829003601f168201915b50505050508060200190518101906105be9190610d75565b90507fefe2abb7e29778fd31bfbbb66286737ba585392a5148530f3db6be634be4cb4933836040516105f1929190610dfd565b60405180910390a16106053415601061080d565b805161061d906001600160a01b03163314601161080d565b80606001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f1935050505015801561065e573d6000803e3d6000fd5b506000808055600181905561067590600290610974565b5050565b610681610832565b600160005414156107375760006002805461069b90610b0e565b80601f01602080910402602001604051908101604052809291908181526020018280546106c790610b0e565b80156107145780601f106106e957610100808354040283529160200191610714565b820191906000526020600020905b8154815290600101906020018083116106f757829003601f168201915b505050505080602001905181019061072c9190610c72565b602001519392505050565b600260005414156107e25760006002805461075190610b0e565b80601f016020809104026020016040519081016040528092919081815260200182805461077d90610b0e565b80156107ca5780601f1061079f576101008083540402835291602001916107ca565b820191906000526020600020905b8154815290600101906020018083116107ad57829003601f168201915b505050505080602001905181019061072c9190610d75565b600360005414156107fc5760006002805461075190610b0e565b6108086000600761080d565b919050565b816106755760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805161012081018252600060e08201818152610100830182905282528251808401845281815260208082018390528084019190915282840182905283518085018552828152808201839052606084015283518085018552828152808201839052608084015260a08301829052835180850190945281845283015260c081019190915290565b604051806080016040528060006001600160a01b031681526020016108dc610832565b815260006020820181905260409091015290565b8280546108fc90610b0e565b90600052602060002090601f01602090048101928261091e5760008555610964565b82601f1061093757805160ff1916838001178555610964565b82800160010185558215610964579182015b82811115610964578251825591602001919060010190610949565b506109709291506109b1565b5090565b50805461098090610b0e565b6000825580601f10610990575050565b601f0160209004906000526020600020908101906109ae91906109b1565b50565b5b8082111561097057600081556001016109b2565b6109db82825180518252602090810151910152565b6020818101518051604085015290810151606084015250604081015160808301526060810151805160a0840152602081015160c0840152506080810151805160e084015260208101516101008401525060a081015161012083015260c0015180516101408301526020015161016090910152565b6101808101610a5e82846109c6565b92915050565b600060408284031215610a7657600080fd5b50919050565b600060408284031215610a8e57600080fd5b610a988383610a64565b9392505050565b82815260006020604081840152835180604085015260005b81811015610ad357858101830151858201606001528201610ab7565b81811115610ae5576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610a7657600080fd5b600181811c90821680610b2257607f821691505b60208210811415610a7657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461080857600080fd5b600060408284031215610b6c57600080fd5b6040516040810181811067ffffffffffffffff82111715610b9d57634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b60006101808284031215610bca57600080fd5b60405160e0810181811067ffffffffffffffff82111715610bfb57634e487b7160e01b600052604160045260246000fd5b604052905080610c0b8484610b5a565b8152610c1a8460408501610b5a565b602082015260808301516040820152610c368460a08501610b5a565b6060820152610c488460e08501610b5a565b608082015261012083015160a0820152610c66846101408501610b5a565b60c08201525092915050565b60006101c08284031215610c8557600080fd5b6040516060810181811067ffffffffffffffff82111715610cb657634e487b7160e01b600052604160045260246000fd5b604052610cc283610b43565b8152610cd18460208501610bb7565b60208201526101a09290920151604083015250919050565b8035801515811461080857600080fd5b6001600160a01b038316815281356020808301919091526060820190610d20908401610ce9565b151560408301529392505050565b81516001600160a01b0390811682526020808401516101e084019291610d56908501826109c6565b5060408401516101a08401526060909301519092166101c09091015290565b60006101e08284031215610d8857600080fd5b6040516080810181811067ffffffffffffffff82111715610db957634e487b7160e01b600052604160045260246000fd5b604052610dc583610b43565b8152610dd48460208501610bb7565b60208201526101a08301516040820152610df16101c08401610b43565b60608201529392505050565b6001600160a01b038316815281356020808301919091526080820190610e24908401610ce9565b15156040830152610e3760408401610ce9565b15156060830152939250505056fea2646970667358221220db4dc0c103c7091bdf9ff80181d1b87105112c48c1a58827f3a2cf62349ac54964736f6c634300080c0033`,
  BytecodeLen: 5069,
  Which: `oD`,
  version: 7,
  views: {
    Info: {
      details: `Info_details`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:126:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:135:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:143:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:153:11:after expr stmt semicolon',
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
  "Attendee": Attendee
  };
export const _APIs = {
  };
