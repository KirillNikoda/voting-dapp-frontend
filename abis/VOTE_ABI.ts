export const VOTE_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToActivate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActivated",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isRegistrationFinished",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "registered",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "signers",
        type: "address[]",
      },
    ],
    name: "VotingActivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToActivate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActivated",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isRegistrationFinished",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "registered",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "signers",
        type: "address[]",
      },
    ],
    name: "VotingRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "VotingSigned",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "activateVoting",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_votingDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_registrationDuration",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_halfToVote",
        type: "bool",
      },
    ],
    name: "createVoting",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllVotings",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          {
            internalType: "uint256",
            name: "votingDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "registrationDuration",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isFinished",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isRegistrationFinished",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isActivated",
            type: "bool",
          },
          {
            internalType: "address[]",
            name: "registered",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "signers",
            type: "address[]",
          },
          {
            internalType: "bool",
            name: "halfToVote",
            type: "bool",
          },
        ],
        internalType: "struct Vote.Voting[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "registerToVote",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "signVoting",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votings",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "votingDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "registrationDuration",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isRegistrationFinished",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isActivated",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "halfToVote",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
