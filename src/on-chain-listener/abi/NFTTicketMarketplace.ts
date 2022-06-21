export const contractData = {
  address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  abi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'approved',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'ApprovalForAll',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'createdTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'id',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'onChainId',
          type: 'uint256',
        },
      ],
      name: 'EventCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'EventDeleted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endTime',
          type: 'uint256',
        },
      ],
      name: 'EventUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'seller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'sold',
          type: 'bool',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'onChainId',
          type: 'uint256',
        },
      ],
      name: 'MarketItemCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'onChainId',
          type: 'uint256',
        },
      ],
      name: 'MarketItemSold',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'ticketTypeOnChainId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'ownerAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'ticketTypeId',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'int256',
          name: 'limitCurrent',
          type: 'int256',
        },
      ],
      name: 'TicketSold',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eventOnChainId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'createdTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'id',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startSellingTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endSellingTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'int256',
          name: 'totalLimit',
          type: 'int256',
        },
        {
          indexed: false,
          internalType: 'int256',
          name: 'currentLimit',
          type: 'int256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'eventId',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'onChainId',
          type: 'uint256',
        },
      ],
      name: 'TicketTypeCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'startTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'endTime',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'id',
          type: 'string',
        },
      ],
      name: 'createEvent',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'marketId',
          type: 'uint256',
        },
      ],
      name: 'createMarketSale',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'eventId',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'id',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'startSellingTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'endSellingTime',
          type: 'uint256',
        },
        {
          internalType: 'int256',
          name: 'limit',
          type: 'int256',
        },
      ],
      name: 'createTicketType',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'createToken',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'fetchItemsListed',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'address payable',
              name: 'seller',
              type: 'address',
            },
            {
              internalType: 'address payable',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'sold',
              type: 'bool',
            },
          ],
          internalType: 'struct NFTTicketMarketplace.MarketItem[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'fetchMarketItems',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'address payable',
              name: 'seller',
              type: 'address',
            },
            {
              internalType: 'address payable',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'sold',
              type: 'bool',
            },
          ],
          internalType: 'struct NFTTicketMarketplace.MarketItem[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'fetchMyNFTs',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'tokenId',
              type: 'uint256',
            },
            {
              internalType: 'address payable',
              name: 'seller',
              type: 'address',
            },
            {
              internalType: 'address payable',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'sold',
              type: 'bool',
            },
          ],
          internalType: 'struct NFTTicketMarketplace.MarketItem[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'getApproved',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getListingPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
      ],
      name: 'isApprovedForAll',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'ownerOf',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'ticketTypeId',
          type: 'uint256',
        },
      ],
      name: 'payForTicket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
      ],
      name: 'resellToken',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: '_data',
          type: 'bytes',
        },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'uri',
          type: 'string',
        },
      ],
      name: 'setBaseURI',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'tokenURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'eventId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'startTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'endTime',
          type: 'uint256',
        },
      ],
      name: 'updateEvent',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_listingPrice',
          type: 'uint256',
        },
      ],
      name: 'updateListingPrice',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
  ],
  transactionHash:
    '0x1561b45c850358562275db30a65ee4ebd94cd3609265b3aaf107f4472ea216ed',
  receipt: {
    to: null,
    from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    contractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    transactionIndex: 0,
    gasUsed: '4634790',
    logsBloom:
      '0x00000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000040020000000000000100000800000000000000000000000000000000400000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000040000000200000000000000000000000002000000000000000000020000000000000000000000000000000000000000000000000000000000000000000',
    blockHash:
      '0xdb3c9d08b26801f480cd2f1bd586755d43d1556384731bd5554c94c584f734b5',
    transactionHash:
      '0x1561b45c850358562275db30a65ee4ebd94cd3609265b3aaf107f4472ea216ed',
    logs: [
      {
        transactionIndex: 0,
        blockNumber: 1,
        transactionHash:
          '0x1561b45c850358562275db30a65ee4ebd94cd3609265b3aaf107f4472ea216ed',
        address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        topics: [
          '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0',
          '0x0000000000000000000000000000000000000000000000000000000000000000',
          '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
        ],
        data: '0x',
        logIndex: 0,
        blockHash:
          '0xdb3c9d08b26801f480cd2f1bd586755d43d1556384731bd5554c94c584f734b5',
      },
    ],
    blockNumber: 1,
    cumulativeGasUsed: '4634790',
    status: 1,
    byzantium: true,
  },
  args: [],
  numDeployments: 1,
  solcInputHash: 'f5668983daba7280a897977fcb7eafd3',
  metadata:
    '{"compiler":{"version":"0.8.8+commit.dddeac2f"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"createdTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"string","name":"id","type":"string"},{"indexed":false,"internalType":"uint256","name":"onChainId","type":"uint256"}],"name":"EventCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"EventDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"EventUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"sold","type":"bool"},{"indexed":false,"internalType":"uint256","name":"onChainId","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"onChainId","type":"uint256"}],"name":"MarketItemSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ticketTypeOnChainId","type":"uint256"},{"indexed":false,"internalType":"address","name":"ownerAddress","type":"address"},{"indexed":false,"internalType":"string","name":"ticketTypeId","type":"string"},{"indexed":false,"internalType":"int256","name":"limitCurrent","type":"int256"}],"name":"TicketSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"eventOnChainId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"createdTime","type":"uint256"},{"indexed":false,"internalType":"string","name":"id","type":"string"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startSellingTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endSellingTime","type":"uint256"},{"indexed":false,"internalType":"int256","name":"totalLimit","type":"int256"},{"indexed":false,"internalType":"int256","name":"currentLimit","type":"int256"},{"indexed":false,"internalType":"string","name":"eventId","type":"string"},{"indexed":false,"internalType":"uint256","name":"onChainId","type":"uint256"}],"name":"TicketTypeCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"string","name":"id","type":"string"}],"name":"createEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"marketId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"string","name":"id","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"startSellingTime","type":"uint256"},{"internalType":"uint256","name":"endSellingTime","type":"uint256"},{"internalType":"int256","name":"limit","type":"int256"}],"name":"createTicketType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fetchItemsListed","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTTicketMarketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTTicketMarketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct NFTTicketMarketplace.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ticketTypeId","type":"uint256"}],"name":"payForTicket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"resellToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"name":"updateEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"updateListingPrice","outputs":[],"stateMutability":"payable","type":"function"}],"devdoc":{"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"owner()":{"details":"Returns the address of the current owner."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}."},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"tokenURI(uint256)":{"details":"See {IERC721Metadata-tokenURI}."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"contracts/NFTTicketMarketplace.sol":"NFTTicketMarketplace"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"@openzeppelin/contracts/access/Ownable.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (access/Ownable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../utils/Context.sol\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        require(owner() == _msgSender(), \\"Ownable: caller is not the owner\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby removing any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\"Ownable: new owner is the zero address\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n","keccak256":"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9","license":"MIT"},"@openzeppelin/contracts/token/ERC721/ERC721.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC721/ERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC721.sol\\";\\nimport \\"./IERC721Receiver.sol\\";\\nimport \\"./extensions/IERC721Metadata.sol\\";\\nimport \\"../../utils/Address.sol\\";\\nimport \\"../../utils/Context.sol\\";\\nimport \\"../../utils/Strings.sol\\";\\nimport \\"../../utils/introspection/ERC165.sol\\";\\n\\n/**\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\n * {ERC721Enumerable}.\\n */\\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\\n    using Address for address;\\n    using Strings for uint256;\\n\\n    // Token name\\n    string private _name;\\n\\n    // Token symbol\\n    string private _symbol;\\n\\n    // Mapping from token ID to owner address\\n    mapping(uint256 => address) private _owners;\\n\\n    // Mapping owner address to token count\\n    mapping(address => uint256) private _balances;\\n\\n    // Mapping from token ID to approved address\\n    mapping(uint256 => address) private _tokenApprovals;\\n\\n    // Mapping from owner to operator approvals\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\n\\n    /**\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\n        return\\n            interfaceId == type(IERC721).interfaceId ||\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\n            super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-balanceOf}.\\n     */\\n    function balanceOf(address owner) public view virtual override returns (uint256) {\\n        require(owner != address(0), \\"ERC721: balance query for the zero address\\");\\n        return _balances[owner];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-ownerOf}.\\n     */\\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\\n        address owner = _owners[tokenId];\\n        require(owner != address(0), \\"ERC721: owner query for nonexistent token\\");\\n        return owner;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-name}.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-symbol}.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-tokenURI}.\\n     */\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\n        require(_exists(tokenId), \\"ERC721Metadata: URI query for nonexistent token\\");\\n\\n        string memory baseURI = _baseURI();\\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : \\"\\";\\n    }\\n\\n    /**\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\n     * by default, can be overridden in child contracts.\\n     */\\n    function _baseURI() internal view virtual returns (string memory) {\\n        return \\"\\";\\n    }\\n\\n    /**\\n     * @dev See {IERC721-approve}.\\n     */\\n    function approve(address to, uint256 tokenId) public virtual override {\\n        address owner = ERC721.ownerOf(tokenId);\\n        require(to != owner, \\"ERC721: approval to current owner\\");\\n\\n        require(\\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\\n            \\"ERC721: approve caller is not owner nor approved for all\\"\\n        );\\n\\n        _approve(to, tokenId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-getApproved}.\\n     */\\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\\n        require(_exists(tokenId), \\"ERC721: approved query for nonexistent token\\");\\n\\n        return _tokenApprovals[tokenId];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-setApprovalForAll}.\\n     */\\n    function setApprovalForAll(address operator, bool approved) public virtual override {\\n        _setApprovalForAll(_msgSender(), operator, approved);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-isApprovedForAll}.\\n     */\\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\\n        return _operatorApprovals[owner][operator];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-transferFrom}.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) public virtual override {\\n        //solhint-disable-next-line max-line-length\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\"ERC721: transfer caller is not owner nor approved\\");\\n\\n        _transfer(from, to, tokenId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-safeTransferFrom}.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) public virtual override {\\n        safeTransferFrom(from, to, tokenId, \\"\\");\\n    }\\n\\n    /**\\n     * @dev See {IERC721-safeTransferFrom}.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes memory _data\\n    ) public virtual override {\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\"ERC721: transfer caller is not owner nor approved\\");\\n        _safeTransfer(from, to, tokenId, _data);\\n    }\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\\n     *\\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _safeTransfer(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes memory _data\\n    ) internal virtual {\\n        _transfer(from, to, tokenId);\\n        require(_checkOnERC721Received(from, to, tokenId, _data), \\"ERC721: transfer to non ERC721Receiver implementer\\");\\n    }\\n\\n    /**\\n     * @dev Returns whether `tokenId` exists.\\n     *\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\n     *\\n     * Tokens start existing when they are minted (`_mint`),\\n     * and stop existing when they are burned (`_burn`).\\n     */\\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\\n        return _owners[tokenId] != address(0);\\n    }\\n\\n    /**\\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\\n        require(_exists(tokenId), \\"ERC721: operator query for nonexistent token\\");\\n        address owner = ERC721.ownerOf(tokenId);\\n        return (spender == owner || isApprovedForAll(owner, spender) || getApproved(tokenId) == spender);\\n    }\\n\\n    /**\\n     * @dev Safely mints `tokenId` and transfers it to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must not exist.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _safeMint(address to, uint256 tokenId) internal virtual {\\n        _safeMint(to, tokenId, \\"\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\n     */\\n    function _safeMint(\\n        address to,\\n        uint256 tokenId,\\n        bytes memory _data\\n    ) internal virtual {\\n        _mint(to, tokenId);\\n        require(\\n            _checkOnERC721Received(address(0), to, tokenId, _data),\\n            \\"ERC721: transfer to non ERC721Receiver implementer\\"\\n        );\\n    }\\n\\n    /**\\n     * @dev Mints `tokenId` and transfers it to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must not exist.\\n     * - `to` cannot be the zero address.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _mint(address to, uint256 tokenId) internal virtual {\\n        require(to != address(0), \\"ERC721: mint to the zero address\\");\\n        require(!_exists(tokenId), \\"ERC721: token already minted\\");\\n\\n        _beforeTokenTransfer(address(0), to, tokenId);\\n\\n        _balances[to] += 1;\\n        _owners[tokenId] = to;\\n\\n        emit Transfer(address(0), to, tokenId);\\n\\n        _afterTokenTransfer(address(0), to, tokenId);\\n    }\\n\\n    /**\\n     * @dev Destroys `tokenId`.\\n     * The approval is cleared when the token is burned.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _burn(uint256 tokenId) internal virtual {\\n        address owner = ERC721.ownerOf(tokenId);\\n\\n        _beforeTokenTransfer(owner, address(0), tokenId);\\n\\n        // Clear approvals\\n        _approve(address(0), tokenId);\\n\\n        _balances[owner] -= 1;\\n        delete _owners[tokenId];\\n\\n        emit Transfer(owner, address(0), tokenId);\\n\\n        _afterTokenTransfer(owner, address(0), tokenId);\\n    }\\n\\n    /**\\n     * @dev Transfers `tokenId` from `from` to `to`.\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _transfer(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) internal virtual {\\n        require(ERC721.ownerOf(tokenId) == from, \\"ERC721: transfer from incorrect owner\\");\\n        require(to != address(0), \\"ERC721: transfer to the zero address\\");\\n\\n        _beforeTokenTransfer(from, to, tokenId);\\n\\n        // Clear approvals from the previous owner\\n        _approve(address(0), tokenId);\\n\\n        _balances[from] -= 1;\\n        _balances[to] += 1;\\n        _owners[tokenId] = to;\\n\\n        emit Transfer(from, to, tokenId);\\n\\n        _afterTokenTransfer(from, to, tokenId);\\n    }\\n\\n    /**\\n     * @dev Approve `to` to operate on `tokenId`\\n     *\\n     * Emits a {Approval} event.\\n     */\\n    function _approve(address to, uint256 tokenId) internal virtual {\\n        _tokenApprovals[tokenId] = to;\\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\\n    }\\n\\n    /**\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\n     *\\n     * Emits a {ApprovalForAll} event.\\n     */\\n    function _setApprovalForAll(\\n        address owner,\\n        address operator,\\n        bool approved\\n    ) internal virtual {\\n        require(owner != operator, \\"ERC721: approve to caller\\");\\n        _operatorApprovals[owner][operator] = approved;\\n        emit ApprovalForAll(owner, operator, approved);\\n    }\\n\\n    /**\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\\n     * The call is not executed if the target address is not a contract.\\n     *\\n     * @param from address representing the previous owner of the given token ID\\n     * @param to target address that will receive the tokens\\n     * @param tokenId uint256 ID of the token to be transferred\\n     * @param _data bytes optional data to send along with the call\\n     * @return bool whether the call correctly returned the expected magic value\\n     */\\n    function _checkOnERC721Received(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes memory _data\\n    ) private returns (bool) {\\n        if (to.isContract()) {\\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\\n                return retval == IERC721Receiver.onERC721Received.selector;\\n            } catch (bytes memory reason) {\\n                if (reason.length == 0) {\\n                    revert(\\"ERC721: transfer to non ERC721Receiver implementer\\");\\n                } else {\\n                    assembly {\\n                        revert(add(32, reason), mload(reason))\\n                    }\\n                }\\n            }\\n        } else {\\n            return true;\\n        }\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any token transfer. This includes minting\\n     * and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\\n     * transferred to `to`.\\n     * - When `from` is zero, `tokenId` will be minted for `to`.\\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) internal virtual {}\\n}\\n","keccak256":"0x921f012325281f7d81e29c53a13824cf6c2c5d77232065d0d4f3f912e97af6ea","license":"MIT"},"@openzeppelin/contracts/token/ERC721/IERC721.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../../utils/introspection/IERC165.sol\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external;\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 tokenId\\n    ) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool _approved) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n}\\n","keccak256":"0x0d4de01fe5360c38b4ad2b0822a12722958428f5138a7ff47c1720eb6fa52bba","license":"MIT"},"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC721/IERC721Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title ERC721 token receiver interface\\n * @dev Interface for any contract that wants to support safeTransfers\\n * from ERC721 asset contracts.\\n */\\ninterface IERC721Receiver {\\n    /**\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\n     * by `operator` from `from`, this function is called.\\n     *\\n     * It must return its Solidity selector to confirm the token transfer.\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\n     *\\n     * The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\\n     */\\n    function onERC721Received(\\n        address operator,\\n        address from,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n","keccak256":"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da","license":"MIT"},"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/ERC721URIStorage.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../ERC721.sol\\";\\n\\n/**\\n * @dev ERC721 token with storage based token URI management.\\n */\\nabstract contract ERC721URIStorage is ERC721 {\\n    using Strings for uint256;\\n\\n    // Optional mapping for token URIs\\n    mapping(uint256 => string) private _tokenURIs;\\n\\n    /**\\n     * @dev See {IERC721Metadata-tokenURI}.\\n     */\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\n        require(_exists(tokenId), \\"ERC721URIStorage: URI query for nonexistent token\\");\\n\\n        string memory _tokenURI = _tokenURIs[tokenId];\\n        string memory base = _baseURI();\\n\\n        // If there is no base URI, return the token URI.\\n        if (bytes(base).length == 0) {\\n            return _tokenURI;\\n        }\\n        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).\\n        if (bytes(_tokenURI).length > 0) {\\n            return string(abi.encodePacked(base, _tokenURI));\\n        }\\n\\n        return super.tokenURI(tokenId);\\n    }\\n\\n    /**\\n     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {\\n        require(_exists(tokenId), \\"ERC721URIStorage: URI set of nonexistent token\\");\\n        _tokenURIs[tokenId] = _tokenURI;\\n    }\\n\\n    /**\\n     * @dev Destroys `tokenId`.\\n     * The approval is cleared when the token is burned.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _burn(uint256 tokenId) internal virtual override {\\n        super._burn(tokenId);\\n\\n        if (bytes(_tokenURIs[tokenId]).length != 0) {\\n            delete _tokenURIs[tokenId];\\n        }\\n    }\\n}\\n","keccak256":"0x1cbe42915bc66227970fe99bc0f783eb1de30f2b48f984af01ad45edb9658698","license":"MIT"},"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../IERC721.sol\\";\\n\\n/**\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\n */\\ninterface IERC721Metadata is IERC721 {\\n    /**\\n     * @dev Returns the token collection name.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the token collection symbol.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\n     */\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\n}\\n","keccak256":"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9","license":"MIT"},"@openzeppelin/contracts/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        require(isContract(target), \\"Address: call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\"Address: static call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\"Address: delegate call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0x2ccf9d2313a313d41a791505f2b5abfdc62191b5d4334f7f7a82691c088a1c87","license":"MIT"},"@openzeppelin/contracts/utils/Context.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n","keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT"},"@openzeppelin/contracts/utils/Counters.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Counters.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title Counters\\n * @author Matt Condon (@shrugs)\\n * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number\\n * of elements in a mapping, issuing ERC721 ids, or counting request ids.\\n *\\n * Include with `using Counters for Counters.Counter;`\\n */\\nlibrary Counters {\\n    struct Counter {\\n        // This variable should never be directly accessed by users of the library: interactions must be restricted to\\n        // the library\'s function. As of Solidity v0.5.2, this cannot be enforced, though there is a proposal to add\\n        // this feature: see https://github.com/ethereum/solidity/issues/4637\\n        uint256 _value; // default: 0\\n    }\\n\\n    function current(Counter storage counter) internal view returns (uint256) {\\n        return counter._value;\\n    }\\n\\n    function increment(Counter storage counter) internal {\\n        unchecked {\\n            counter._value += 1;\\n        }\\n    }\\n\\n    function decrement(Counter storage counter) internal {\\n        uint256 value = counter._value;\\n        require(value > 0, \\"Counter: decrement overflow\\");\\n        unchecked {\\n            counter._value = value - 1;\\n        }\\n    }\\n\\n    function reset(Counter storage counter) internal {\\n        counter._value = 0;\\n    }\\n}\\n","keccak256":"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1","license":"MIT"},"@openzeppelin/contracts/utils/Strings.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _HEX_SYMBOLS = \\"0123456789abcdef\\";\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\n\\n        if (value == 0) {\\n            return \\"0\\";\\n        }\\n        uint256 temp = value;\\n        uint256 digits;\\n        while (temp != 0) {\\n            digits++;\\n            temp /= 10;\\n        }\\n        bytes memory buffer = new bytes(digits);\\n        while (value != 0) {\\n            digits -= 1;\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\n            value /= 10;\\n        }\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        if (value == 0) {\\n            return \\"0x00\\";\\n        }\\n        uint256 temp = value;\\n        uint256 length = 0;\\n        while (temp != 0) {\\n            length++;\\n            temp >>= 8;\\n        }\\n        return toHexString(value, length);\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\"0\\";\\n        buffer[1] = \\"x\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\"Strings: hex length insufficient\\");\\n        return string(buffer);\\n    }\\n}\\n","keccak256":"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45","license":"MIT"},"@openzeppelin/contracts/utils/introspection/ERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC165.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n","keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT"},"@openzeppelin/contracts/utils/introspection/IERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n","keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT"},"contracts/NFTTicketMarketplace.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity ^0.8.4;\\n\\nimport \\"@openzeppelin/contracts/utils/Counters.sol\\";\\nimport \\"@openzeppelin/contracts/access/Ownable.sol\\";\\nimport \\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\\";\\nimport \\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\";\\n\\n// import \\"hardhat/console.sol\\";\\n\\ncontract NFTTicketMarketplace is ERC721, Ownable {\\n    string private baseURI = \\"http://localhost:5000/event-ticket/data/\\";\\n\\n    function _baseURI() internal view override returns (string memory) {\\n        return baseURI;\\n    }\\n\\n    function setBaseURI(string memory uri) public onlyOwner {\\n        baseURI = uri;\\n    }\\n\\n    struct Event {\\n        address owner;\\n        uint256 createdTime;\\n        uint256 startTime;\\n        uint256 endTime;\\n        string id;\\n        bool exist;\\n    }\\n    event EventCreated(\\n        address owner,\\n        uint256 createdTime,\\n        uint256 startTime,\\n        uint256 endTime,\\n        string id,\\n        uint256 onChainId\\n    );\\n    event EventUpdated(uint256 id, uint256 startTime, uint256 endTime);\\n    event EventDeleted(uint256 id);\\n    struct TicketType {\\n        uint256 eventId;\\n        uint256 createdTime;\\n        string id;\\n        uint256 price;\\n        uint256 startSellingTime;\\n        uint256 endSellingTime;\\n        int256 totalLimit;\\n        int256 currentLimit;\\n        bool exist;\\n    }\\n    event TicketTypeCreated(\\n        uint256 eventOnChainId,\\n        uint256 createdTime,\\n        string id,\\n        uint256 price,\\n        uint256 startSellingTime,\\n        uint256 endSellingTime,\\n        int256 totalLimit,\\n        int256 currentLimit,\\n        string eventId,\\n        uint256 onChainId\\n    );\\n    event TicketSold(\\n        uint256 tokenId,\\n        uint256 ticketTypeOnChainId,\\n        address ownerAddress,\\n        string ticketTypeId,\\n        int256 limitCurrent\\n    );\\n    using Counters for Counters.Counter;\\n    Counters.Counter private _tokenIds;\\n    Counters.Counter private _eventIds;\\n    Counters.Counter private _typeTicketIds;\\n    Counters.Counter private _itemsSold;\\n    Counters.Counter private _marketIds;\\n\\n    uint256 listingPrice = 0.025 ether;\\n\\n    mapping(uint256 => MarketItem) private idToMarketItem;\\n    mapping(uint256 => Event) private idToEvent;\\n    mapping(uint256 => TicketType) private idToTicketType;\\n    mapping(uint256 => uint256) private idTokenToIdTicketType;\\n\\n    struct MarketItem {\\n        uint256 tokenId;\\n        address payable seller;\\n        address payable owner;\\n        uint256 price;\\n        bool sold;\\n    }\\n\\n    event MarketItemCreated(\\n        uint256 indexed tokenId,\\n        address seller,\\n        address owner,\\n        uint256 price,\\n        bool sold,\\n        uint256 onChainId\\n    );\\n\\n    event MarketItemSold(uint256 onChainId);\\n\\n    constructor() ERC721(\\"Ticket Tokens\\", \\"TCKT\\") {\\n        // owner = payable(msg.sender);\\n    }\\n\\n    /* Updates the listing price of the contract */\\n    function updateListingPrice(uint256 _listingPrice)\\n        public\\n        payable\\n        onlyOwner\\n    {\\n        listingPrice = _listingPrice;\\n    }\\n\\n    /* Returns the listing price of the contract */\\n    function getListingPrice() public view returns (uint256) {\\n        return listingPrice;\\n    }\\n\\n    function payForTicket(uint256 ticketTypeId)\\n        public\\n        payable\\n        returns (uint256)\\n    {\\n        TicketType storage ticketType = idToTicketType[ticketTypeId];\\n        require(ticketType.price > 0, \\"Ticket type not exsit\\");\\n        require(ticketType.price == msg.value, \\"Not correct amount of money\\");\\n        require(\\n            ticketType.startSellingTime > block.timestamp &&\\n                block.timestamp < idToTicketType[ticketTypeId].endSellingTime,\\n            \\"Not in selling time\\"\\n        );\\n        require(\\n            ticketType.totalLimit == -1 || ticketType.totalLimit > 0,\\n            \\"No ticket left\\"\\n        );\\n        if (ticketType.totalLimit != -1) ticketType.currentLimit--;\\n        uint256 tokenId = createToken();\\n        setTokenTicketTypeId(tokenId, ticketTypeId);\\n        emit TicketSold(\\n            tokenId,\\n            ticketTypeId,\\n            msg.sender,\\n            ticketType.id,\\n            ticketType.currentLimit\\n        );\\n        return tokenId;\\n    }\\n\\n    function createEvent(\\n        uint256 startTime,\\n        uint256 endTime,\\n        string memory id\\n    ) public {\\n        _eventIds.increment();\\n        uint256 newEventId = _eventIds.current();\\n        idToEvent[newEventId] = Event(\\n            msg.sender,\\n            block.timestamp,\\n            startTime,\\n            endTime,\\n            id,\\n            true\\n        );\\n        emit EventCreated(\\n            msg.sender,\\n            block.timestamp,\\n            startTime,\\n            endTime,\\n            id,\\n            newEventId\\n        );\\n    }\\n\\n    function updateEvent(\\n        uint256 eventId,\\n        uint256 startTime,\\n        uint256 endTime\\n    ) public {\\n        require(idToEvent[eventId].exist == true, \\"Not exists\\");\\n        idToEvent[eventId].startTime = startTime;\\n        idToEvent[eventId].startTime = endTime;\\n\\n        emit EventUpdated(eventId, startTime, endTime);\\n    }\\n\\n    function createTicketType(\\n        uint256 eventId,\\n        string memory id,\\n        uint256 price,\\n        uint256 startSellingTime,\\n        uint256 endSellingTime,\\n        int256 limit\\n    ) public {\\n        require(price > 0, \\"Price must be at least 1 wei\\");\\n        _typeTicketIds.increment();\\n        uint256 newEventId = _typeTicketIds.current();\\n        idToTicketType[newEventId] = TicketType(\\n            eventId,\\n            block.timestamp,\\n            id,\\n            price,\\n            startSellingTime,\\n            endSellingTime,\\n            limit,\\n            limit,\\n            true\\n        );\\n        Event storage eventItem = idToEvent[eventId];\\n        emit TicketTypeCreated(\\n            eventId,\\n            block.timestamp,\\n            id,\\n            price,\\n            startSellingTime,\\n            endSellingTime,\\n            limit,\\n            limit,\\n            eventItem.id,\\n            newEventId\\n        );\\n    }\\n\\n    /* Mints a token and lists it in the marketplace */\\n    function createToken() public returns (uint256) {\\n        _tokenIds.increment();\\n        uint256 newTokenId = _tokenIds.current();\\n\\n        _mint(msg.sender, newTokenId);\\n\\n        // createMarketItem(newTokenId, price);\\n        return newTokenId;\\n    }\\n\\n    function setTokenTicketTypeId(uint256 tokenId, uint256 ticketTypeId)\\n        internal\\n    {\\n        require(msg.sender == ownerOf(tokenId), \\"Have to be onwer of token\\");\\n        idTokenToIdTicketType[tokenId] = ticketTypeId;\\n    }\\n\\n    function createMarketItem(uint256 tokenId, uint256 price) private {\\n        require(price > 0, \\"Price must be at least 1 wei\\");\\n        require(\\n            msg.value == listingPrice,\\n            \\"Price must be equal to listing price\\"\\n        );\\n\\n        idToMarketItem[tokenId] = MarketItem(\\n            tokenId,\\n            payable(msg.sender),\\n            payable(address(this)),\\n            price,\\n            false\\n        );\\n\\n        _transfer(msg.sender, address(this), tokenId);\\n    }\\n\\n    /* allows someone to resell a token they have purchased */\\n    function resellToken(uint256 tokenId, uint256 price) public payable {\\n        require(\\n            ownerOf(tokenId) == msg.sender,\\n            \\"Only item owner can perform this operation\\"\\n        );\\n        require(\\n            msg.value == listingPrice,\\n            \\"Price must be equal to listing price\\"\\n        );\\n        _marketIds.increment();\\n        uint256 key = _marketIds.current();\\n        idToMarketItem[key].sold = false;\\n        idToMarketItem[key].price = price;\\n        idToMarketItem[key].seller = payable(msg.sender);\\n        idToMarketItem[key].owner = payable(address(this));\\n\\n        _transfer(msg.sender, address(this), tokenId);\\n        emit MarketItemCreated(\\n            tokenId,\\n            msg.sender,\\n            address(this),\\n            price,\\n            false,\\n            key\\n        );\\n    }\\n\\n    /* Creates the sale of a marketplace item */\\n    /* Transfers ownership of the item, as well as funds between parties */\\n    function createMarketSale(uint256 marketId) public payable {\\n        uint256 price = idToMarketItem[marketId].price;\\n        address seller = idToMarketItem[marketId].seller;\\n        require(\\n            msg.value == price,\\n            \\"Please submit the asking price in order to complete the purchase\\"\\n        );\\n        idToMarketItem[marketId].owner = payable(msg.sender);\\n        idToMarketItem[marketId].sold = true;\\n        idToMarketItem[marketId].seller = payable(address(0));\\n        _itemsSold.increment();\\n        _transfer(address(this), msg.sender, marketId);\\n        payable(owner()).transfer(listingPrice);\\n        payable(seller).transfer(msg.value);\\n        emit MarketItemSold(marketId);\\n    }\\n\\n    /* Returns all unsold market items */\\n    function fetchMarketItems() public view returns (MarketItem[] memory) {\\n        uint256 itemCount = _marketIds.current();\\n        uint256 unsoldItemCount = _marketIds.current() - _itemsSold.current();\\n        uint256 currentIndex = 0;\\n\\n        MarketItem[] memory items = new MarketItem[](unsoldItemCount);\\n        for (uint256 i = 0; i < itemCount; i++) {\\n            if (idToMarketItem[i + 1].owner == address(this)) {\\n                uint256 currentId = i + 1;\\n                MarketItem storage currentItem = idToMarketItem[currentId];\\n                items[currentIndex] = currentItem;\\n                currentIndex += 1;\\n            }\\n        }\\n        return items;\\n    }\\n\\n    /* Returns only items that a user has purchased */\\n    function fetchMyNFTs() public view returns (MarketItem[] memory) {\\n        uint256 totalItemCount = _tokenIds.current();\\n        uint256 itemCount = 0;\\n        uint256 currentIndex = 0;\\n\\n        for (uint256 i = 0; i < totalItemCount; i++) {\\n            if (idToMarketItem[i + 1].owner == msg.sender) {\\n                itemCount += 1;\\n            }\\n        }\\n\\n        MarketItem[] memory items = new MarketItem[](itemCount);\\n        for (uint256 i = 0; i < totalItemCount; i++) {\\n            if (idToMarketItem[i + 1].owner == msg.sender) {\\n                uint256 currentId = i + 1;\\n                MarketItem storage currentItem = idToMarketItem[currentId];\\n                items[currentIndex] = currentItem;\\n                currentIndex += 1;\\n            }\\n        }\\n        return items;\\n    }\\n\\n    /* Returns only items a user has listed */\\n    function fetchItemsListed() public view returns (MarketItem[] memory) {\\n        uint256 totalItemCount = _tokenIds.current();\\n        uint256 itemCount = 0;\\n        uint256 currentIndex = 0;\\n\\n        for (uint256 i = 0; i < totalItemCount; i++) {\\n            if (idToMarketItem[i + 1].seller == msg.sender) {\\n                itemCount += 1;\\n            }\\n        }\\n\\n        MarketItem[] memory items = new MarketItem[](itemCount);\\n        for (uint256 i = 0; i < totalItemCount; i++) {\\n            if (idToMarketItem[i + 1].seller == msg.sender) {\\n                uint256 currentId = i + 1;\\n                MarketItem storage currentItem = idToMarketItem[currentId];\\n                items[currentIndex] = currentItem;\\n                currentIndex += 1;\\n            }\\n        }\\n        return items;\\n    }\\n}\\n","keccak256":"0x39284cca1199b2eb033bb42c83c0215de0160b62092b228544d7e67460a86b68","license":"MIT"}},"version":1}',
  bytecode:
    '0x608060405260405180606001604052806028815260200162005333602891396007908051906020019062000035929190620001e3565b506658d15e17628000600d553480156200004e57600080fd5b506040518060400160405280600d81526020017f5469636b657420546f6b656e73000000000000000000000000000000000000008152506040518060400160405280600481526020017f54434b54000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000d3929190620001e3565b508060019080519060200190620000ec929190620001e3565b5050506200010f620001036200011560201b60201c565b6200011d60201b60201c565b620002f8565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001f190620002c2565b90600052602060002090601f01602090048101928262000215576000855562000261565b82601f106200023057805160ff191683800117855562000261565b8280016001018555821562000261579182015b828111156200026057825182559160200191906001019062000243565b5b50905062000270919062000274565b5090565b5b808211156200028f57600081600090555060010162000275565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002db57607f821691505b60208210811415620002f257620002f162000293565b5b50919050565b61502b80620003086000396000f3fe6080604052600436106101c25760003560e01c806355f804b3116100f7578063a22cb46511610095578063c87b56dd11610064578063c87b56dd14610603578063e219fc7514610640578063e985e9c51461065c578063f2fde38b14610699576101c2565b8063a22cb46514610579578063ae677aa3146105a2578063b88d4fde146105be578063be9af536146105e7576101c2565b8063715018a6116100d1578063715018a6146104e15780638da5cb5b146104f857806395d89b41146105235780639cbf9e361461054e576101c2565b806355f804b31461043e5780636352211e1461046757806370a08231146104a4576101c2565b8063202e374011610164578063294e0d561161013e578063294e0d561461039157806342842e0e146103ba57806345f8fa80146103e35780634868cd631461040e576101c2565b8063202e37401461031457806323b872dd1461033f5780632529851014610368576101c2565b8063095ea7b3116101a0578063095ea7b31461026c5780630f08efe0146102955780630fbfe0e9146102c057806312e85585146102e9576101c2565b806301ffc9a7146101c757806306fdde0314610204578063081812fc1461022f575b600080fd5b3480156101d357600080fd5b506101ee60048036038101906101e991906132e0565b6106c2565b6040516101fb9190613328565b60405180910390f35b34801561021057600080fd5b506102196107a4565b60405161022691906133dc565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190613434565b610836565b60405161026391906134a2565b60405180910390f35b34801561027857600080fd5b50610293600480360381019061028e91906134e9565b6108bb565b005b3480156102a157600080fd5b506102aa6109d3565b6040516102b7919061367f565b60405180910390f35b3480156102cc57600080fd5b506102e760048036038101906102e2919061380c565b610c3c565b005b3480156102f557600080fd5b506102fe610de1565b60405161030b91906138c4565b60405180910390f35b34801561032057600080fd5b50610329610deb565b604051610336919061367f565b60405180910390f35b34801561034b57600080fd5b50610366600480360381019061036191906138df565b6110d9565b005b34801561037457600080fd5b5061038f600480360381019061038a9190613932565b611139565b005b34801561039d57600080fd5b506103b860048036038101906103b39190613985565b611219565b005b3480156103c657600080fd5b506103e160048036038101906103dc91906138df565b611376565b005b3480156103ef57600080fd5b506103f8611396565b604051610405919061367f565b60405180910390f35b61042860048036038101906104239190613434565b611684565b60405161043591906138c4565b60405180910390f35b34801561044a57600080fd5b50610465600480360381019061046091906139f4565b6118b1565b005b34801561047357600080fd5b5061048e60048036038101906104899190613434565b611947565b60405161049b91906134a2565b60405180910390f35b3480156104b057600080fd5b506104cb60048036038101906104c69190613a3d565b6119f9565b6040516104d891906138c4565b60405180910390f35b3480156104ed57600080fd5b506104f6611ab1565b005b34801561050457600080fd5b5061050d611b39565b60405161051a91906134a2565b60405180910390f35b34801561052f57600080fd5b50610538611b63565b60405161054591906133dc565b60405180910390f35b34801561055a57600080fd5b50610563611bf5565b60405161057091906138c4565b60405180910390f35b34801561058557600080fd5b506105a0600480360381019061059b9190613a96565b611c20565b005b6105bc60048036038101906105b79190613434565b611c36565b005b3480156105ca57600080fd5b506105e560048036038101906105e09190613b77565b611cbc565b005b61060160048036038101906105fc9190613434565b611d1e565b005b34801561060f57600080fd5b5061062a60048036038101906106259190613434565b611f78565b60405161063791906133dc565b60405180910390f35b61065a60048036038101906106559190613bfa565b61201f565b005b34801561066857600080fd5b50610683600480360381019061067e9190613c3a565b612236565b6040516106909190613328565b60405180910390f35b3480156106a557600080fd5b506106c060048036038101906106bb9190613a3d565b6122ca565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061078d57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061079d575061079c826123c2565b5b9050919050565b6060600080546107b390613ca9565b80601f01602080910402602001604051908101604052809291908181526020018280546107df90613ca9565b801561082c5780601f106108015761010080835404028352916020019161082c565b820191906000526020600020905b81548152906001019060200180831161080f57829003601f168201915b5050505050905090565b60006108418261242c565b610880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087790613d4d565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006108c682611947565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610937576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092e90613ddf565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610956612498565b73ffffffffffffffffffffffffffffffffffffffff16148061098557506109848161097f612498565b612236565b5b6109c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bb90613e71565b60405180910390fd5b6109ce83836124a0565b505050565b606060006109e1600c612559565b905060006109ef600b612559565b6109f9600c612559565b610a039190613ec0565b90506000808267ffffffffffffffff811115610a2257610a216136ab565b5b604051908082528060200260200182016040528015610a5b57816020015b610a48613174565b815260200190600190039081610a405790505b50905060005b84811015610c31573073ffffffffffffffffffffffffffffffffffffffff16600e6000600184610a919190613ef4565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610c1e576000600182610aee9190613ef4565b90506000600e60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581525050848681518110610c0157610c00613f4a565b5b6020026020010181905250600185610c199190613ef4565b945050505b8080610c2990613f79565b915050610a61565b508094505050505090565b60008411610c7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c769061400e565b60405180910390fd5b610c89600a612567565b6000610c95600a612559565b9050604051806101200160405280888152602001428152602001878152602001868152602001858152602001848152602001838152602001838152602001600115158152506010600083815260200190815260200160002060008201518160000155602082015181600101556040820151816002019080519060200190610d1d9291906131d1565b50606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e082015181600701556101008201518160080160006101000a81548160ff0219169083151502179055509050506000600f600089815260200190815260200160002090507f23e43aa87fb6cd6e0767623783aeb3c1c4aab2dd562879333c14e692a2a6d348884289898989898a896004018b604051610dcf9a999897969594939291906140d2565b60405180910390a15050505050505050565b6000600d54905090565b60606000610df96008612559565b905060008060005b83811015610ea2573373ffffffffffffffffffffffffffffffffffffffff16600e6000600184610e319190613ef4565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e8f57600183610e8c9190613ef4565b92505b8080610e9a90613f79565b915050610e01565b5060008267ffffffffffffffff811115610ebf57610ebe6136ab565b5b604051908082528060200260200182016040528015610ef857816020015b610ee5613174565b815260200190600190039081610edd5790505b50905060005b848110156110ce573373ffffffffffffffffffffffffffffffffffffffff16600e6000600184610f2e9190613ef4565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156110bb576000600182610f8b9190613ef4565b90506000600e60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152505084868151811061109e5761109d613f4a565b5b60200260200101819052506001856110b69190613ef4565b945050505b80806110c690613f79565b915050610efe565b508094505050505090565b6110ea6110e4612498565b8261257d565b611129576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611120906141ee565b60405180910390fd5b61113483838361265b565b505050565b60011515600f600085815260200190815260200160002060050160009054906101000a900460ff161515146111a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119a9061425a565b60405180910390fd5b81600f60008581526020019081526020016000206002018190555080600f6000858152602001908152602001600020600201819055507f7068eff53d4130b0bc23272635506565df6c5b683e458708df42b5468245b7bd83838360405161120c9392919061427a565b60405180910390a1505050565b6112236009612567565b600061122f6009612559565b90506040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200142815260200185815260200184815260200183815260200160011515815250600f600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030155608082015181600401908051906020019061130b9291906131d1565b5060a08201518160050160006101000a81548160ff0219169083151502179055509050507ff721e33d46866b7b414e72296025134f1a7942e8b66fa29295f2158d6d8f6a35334286868686604051611368969594939291906142b1565b60405180910390a150505050565b61139183838360405180602001604052806000815250611cbc565b505050565b606060006113a46008612559565b905060008060005b8381101561144d573373ffffffffffffffffffffffffffffffffffffffff16600e60006001846113dc9190613ef4565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561143a576001836114379190613ef4565b92505b808061144590613f79565b9150506113ac565b5060008267ffffffffffffffff81111561146a576114696136ab565b5b6040519080825280602002602001820160405280156114a357816020015b611490613174565b8152602001906001900390816114885790505b50905060005b84811015611679573373ffffffffffffffffffffffffffffffffffffffff16600e60006001846114d99190613ef4565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156116665760006001826115369190613ef4565b90506000600e60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152505084868151811061164957611648613f4a565b5b60200260200101819052506001856116619190613ef4565b945050505b808061167190613f79565b9150506114a9565b508094505050505090565b60008060106000848152602001908152602001600020905060008160030154116116e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116da90614365565b60405180910390fd5b34816003015414611729576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611720906143d1565b60405180910390fd5b4281600401541180156117515750601060008481526020019081526020016000206005015442105b611790576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117879061443d565b60405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff816006015414806117c6575060008160060154135b611805576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117fc906144a9565b60405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81600601541461184b57806007016000815480929190611845906144c9565b91905055505b6000611855611bf5565b905061186181856128c2565b7f8f452c855319507558f448a0bc0d50aa975f3508ef157722a8c8cdc006def7eb81853385600201866007015460405161189f959493929190614512565b60405180910390a18092505050919050565b6118b9612498565b73ffffffffffffffffffffffffffffffffffffffff166118d7611b39565b73ffffffffffffffffffffffffffffffffffffffff161461192d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611924906145b8565b60405180910390fd5b80600790805190602001906119439291906131d1565b5050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e79061464a565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a61906146dc565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b611ab9612498565b73ffffffffffffffffffffffffffffffffffffffff16611ad7611b39565b73ffffffffffffffffffffffffffffffffffffffff1614611b2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b24906145b8565b60405180910390fd5b611b376000612954565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054611b7290613ca9565b80601f0160208091040260200160405190810160405280929190818152602001828054611b9e90613ca9565b8015611beb5780601f10611bc057610100808354040283529160200191611beb565b820191906000526020600020905b815481529060010190602001808311611bce57829003601f168201915b5050505050905090565b6000611c016008612567565b6000611c0d6008612559565b9050611c193382612a1a565b8091505090565b611c32611c2b612498565b8383612bf4565b5050565b611c3e612498565b73ffffffffffffffffffffffffffffffffffffffff16611c5c611b39565b73ffffffffffffffffffffffffffffffffffffffff1614611cb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca9906145b8565b60405180910390fd5b80600d8190555050565b611ccd611cc7612498565b8361257d565b611d0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d03906141ee565b60405180910390fd5b611d1884848484612d61565b50505050565b6000600e60008381526020019081526020016000206003015490506000600e600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050813414611db6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dad9061476e565b60405180910390fd5b33600e600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600e600085815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600e600085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611e9a600b612567565b611ea530338561265b565b611ead611b39565b73ffffffffffffffffffffffffffffffffffffffff166108fc600d549081150290604051600060405180830381858888f19350505050158015611ef4573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015611f3b573d6000803e3d6000fd5b507f5edde87e7efe9511fd280717315e9a4c5f46a6a84becfc74084b59e48154084483604051611f6b91906138c4565b60405180910390a1505050565b6060611f838261242c565b611fc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fb990614800565b60405180910390fd5b6000611fcc612dbd565b90506000815111611fec5760405180602001604052806000815250612017565b80611ff684612e4f565b60405160200161200792919061485c565b6040516020818303038152906040525b915050919050565b3373ffffffffffffffffffffffffffffffffffffffff1661203f83611947565b73ffffffffffffffffffffffffffffffffffffffff1614612095576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208c906148f2565b60405180910390fd5b600d5434146120d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120d090614984565b60405180910390fd5b6120e3600c612567565b60006120ef600c612559565b90506000600e600083815260200190815260200160002060040160006101000a81548160ff02191690831515021790555081600e60008381526020019081526020016000206003018190555033600e600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600e600083815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506121f033308561265b565b827f2d68735082042d66c5027bd8c6f7e29d9eaa7ce21cd00f9671f170b22a091d283330856000866040516122299594939291906149a4565b60405180910390a2505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6122d2612498565b73ffffffffffffffffffffffffffffffffffffffff166122f0611b39565b73ffffffffffffffffffffffffffffffffffffffff1614612346576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161233d906145b8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156123b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123ad90614a69565b60405180910390fd5b6123bf81612954565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661251383611947565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b6001816000016000828254019250508190555050565b60006125888261242c565b6125c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125be90614afb565b60405180910390fd5b60006125d283611947565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061261457506126138185612236565b5b8061265257508373ffffffffffffffffffffffffffffffffffffffff1661263a84610836565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661267b82611947565b73ffffffffffffffffffffffffffffffffffffffff16146126d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126c890614b8d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612741576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161273890614c1f565b60405180910390fd5b61274c838383612fb0565b6127576000826124a0565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546127a79190613ec0565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546127fe9190613ef4565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46128bd838383612fb5565b505050565b6128cb82611947565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612938576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161292f90614c8b565b60405180910390fd5b8060116000848152602001908152602001600020819055505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612a8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a8190614cf7565b60405180910390fd5b612a938161242c565b15612ad3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612aca90614d63565b60405180910390fd5b612adf60008383612fb0565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612b2f9190613ef4565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612bf060008383612fb5565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612c63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c5a90614dcf565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612d549190613328565b60405180910390a3505050565b612d6c84848461265b565b612d7884848484612fba565b612db7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dae90614e61565b60405180910390fd5b50505050565b606060078054612dcc90613ca9565b80601f0160208091040260200160405190810160405280929190818152602001828054612df890613ca9565b8015612e455780601f10612e1a57610100808354040283529160200191612e45565b820191906000526020600020905b815481529060010190602001808311612e2857829003601f168201915b5050505050905090565b60606000821415612e97576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612fab565b600082905060005b60008214612ec9578080612eb290613f79565b915050600a82612ec29190614eb0565b9150612e9f565b60008167ffffffffffffffff811115612ee557612ee46136ab565b5b6040519080825280601f01601f191660200182016040528015612f175781602001600182028036833780820191505090505b5090505b60008514612fa457600182612f309190613ec0565b9150600a85612f3f9190614ee1565b6030612f4b9190613ef4565b60f81b818381518110612f6157612f60613f4a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85612f9d9190614eb0565b9450612f1b565b8093505050505b919050565b505050565b505050565b6000612fdb8473ffffffffffffffffffffffffffffffffffffffff16613151565b15613144578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02613004612498565b8786866040518563ffffffff1660e01b81526004016130269493929190614f67565b602060405180830381600087803b15801561304057600080fd5b505af192505050801561307157506040513d601f19601f8201168201806040525081019061306e9190614fc8565b60015b6130f4573d80600081146130a1576040519150601f19603f3d011682016040523d82523d6000602084013e6130a6565b606091505b506000815114156130ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016130e390614e61565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050613149565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b8280546131dd90613ca9565b90600052602060002090601f0160209004810192826131ff5760008555613246565b82601f1061321857805160ff1916838001178555613246565b82800160010185558215613246579182015b8281111561324557825182559160200191906001019061322a565b5b5090506132539190613257565b5090565b5b80821115613270576000816000905550600101613258565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6132bd81613288565b81146132c857600080fd5b50565b6000813590506132da816132b4565b92915050565b6000602082840312156132f6576132f561327e565b5b6000613304848285016132cb565b91505092915050565b60008115159050919050565b6133228161330d565b82525050565b600060208201905061333d6000830184613319565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561337d578082015181840152602081019050613362565b8381111561338c576000848401525b50505050565b6000601f19601f8301169050919050565b60006133ae82613343565b6133b8818561334e565b93506133c881856020860161335f565b6133d181613392565b840191505092915050565b600060208201905081810360008301526133f681846133a3565b905092915050565b6000819050919050565b613411816133fe565b811461341c57600080fd5b50565b60008135905061342e81613408565b92915050565b60006020828403121561344a5761344961327e565b5b60006134588482850161341f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061348c82613461565b9050919050565b61349c81613481565b82525050565b60006020820190506134b76000830184613493565b92915050565b6134c681613481565b81146134d157600080fd5b50565b6000813590506134e3816134bd565b92915050565b60008060408385031215613500576134ff61327e565b5b600061350e858286016134d4565b925050602061351f8582860161341f565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61355e816133fe565b82525050565b600061356f82613461565b9050919050565b61357f81613564565b82525050565b61358e8161330d565b82525050565b60a0820160008201516135aa6000850182613555565b5060208201516135bd6020850182613576565b5060408201516135d06040850182613576565b5060608201516135e36060850182613555565b5060808201516135f66080850182613585565b50505050565b60006136088383613594565b60a08301905092915050565b6000602082019050919050565b600061362c82613529565b6136368185613534565b935061364183613545565b8060005b8381101561367257815161365988826135fc565b975061366483613614565b925050600181019050613645565b5085935050505092915050565b600060208201905081810360008301526136998184613621565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6136e382613392565b810181811067ffffffffffffffff82111715613702576137016136ab565b5b80604052505050565b6000613715613274565b905061372182826136da565b919050565b600067ffffffffffffffff821115613741576137406136ab565b5b61374a82613392565b9050602081019050919050565b82818337600083830152505050565b600061377961377484613726565b61370b565b905082815260208101848484011115613795576137946136a6565b5b6137a0848285613757565b509392505050565b600082601f8301126137bd576137bc6136a1565b5b81356137cd848260208601613766565b91505092915050565b6000819050919050565b6137e9816137d6565b81146137f457600080fd5b50565b600081359050613806816137e0565b92915050565b60008060008060008060c087890312156138295761382861327e565b5b600061383789828a0161341f565b965050602087013567ffffffffffffffff81111561385857613857613283565b5b61386489828a016137a8565b955050604061387589828a0161341f565b945050606061388689828a0161341f565b935050608061389789828a0161341f565b92505060a06138a889828a016137f7565b9150509295509295509295565b6138be816133fe565b82525050565b60006020820190506138d960008301846138b5565b92915050565b6000806000606084860312156138f8576138f761327e565b5b6000613906868287016134d4565b9350506020613917868287016134d4565b92505060406139288682870161341f565b9150509250925092565b60008060006060848603121561394b5761394a61327e565b5b60006139598682870161341f565b935050602061396a8682870161341f565b925050604061397b8682870161341f565b9150509250925092565b60008060006060848603121561399e5761399d61327e565b5b60006139ac8682870161341f565b93505060206139bd8682870161341f565b925050604084013567ffffffffffffffff8111156139de576139dd613283565b5b6139ea868287016137a8565b9150509250925092565b600060208284031215613a0a57613a0961327e565b5b600082013567ffffffffffffffff811115613a2857613a27613283565b5b613a34848285016137a8565b91505092915050565b600060208284031215613a5357613a5261327e565b5b6000613a61848285016134d4565b91505092915050565b613a738161330d565b8114613a7e57600080fd5b50565b600081359050613a9081613a6a565b92915050565b60008060408385031215613aad57613aac61327e565b5b6000613abb858286016134d4565b9250506020613acc85828601613a81565b9150509250929050565b600067ffffffffffffffff821115613af157613af06136ab565b5b613afa82613392565b9050602081019050919050565b6000613b1a613b1584613ad6565b61370b565b905082815260208101848484011115613b3657613b356136a6565b5b613b41848285613757565b509392505050565b600082601f830112613b5e57613b5d6136a1565b5b8135613b6e848260208601613b07565b91505092915050565b60008060008060808587031215613b9157613b9061327e565b5b6000613b9f878288016134d4565b9450506020613bb0878288016134d4565b9350506040613bc18782880161341f565b925050606085013567ffffffffffffffff811115613be257613be1613283565b5b613bee87828801613b49565b91505092959194509250565b60008060408385031215613c1157613c1061327e565b5b6000613c1f8582860161341f565b9250506020613c308582860161341f565b9150509250929050565b60008060408385031215613c5157613c5061327e565b5b6000613c5f858286016134d4565b9250506020613c70858286016134d4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613cc157607f821691505b60208210811415613cd557613cd4613c7a565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000613d37602c8361334e565b9150613d4282613cdb565b604082019050919050565b60006020820190508181036000830152613d6681613d2a565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000613dc960218361334e565b9150613dd482613d6d565b604082019050919050565b60006020820190508181036000830152613df881613dbc565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000613e5b60388361334e565b9150613e6682613dff565b604082019050919050565b60006020820190508181036000830152613e8a81613e4e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613ecb826133fe565b9150613ed6836133fe565b925082821015613ee957613ee8613e91565b5b828203905092915050565b6000613eff826133fe565b9150613f0a836133fe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613f3f57613f3e613e91565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613f84826133fe565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613fb757613fb6613e91565b5b600182019050919050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000613ff8601c8361334e565b915061400382613fc2565b602082019050919050565b6000602082019050818103600083015261402781613feb565b9050919050565b614037816137d6565b82525050565b60008190508160005260206000209050919050565b6000815461405f81613ca9565b614069818661334e565b945060018216600081146140845760018114614096576140c9565b60ff19831686526020860193506140c9565b61409f8561403d565b60005b838110156140c1578154818901526001820191506020810190506140a2565b808801955050505b50505092915050565b6000610140820190506140e8600083018d6138b5565b6140f5602083018c6138b5565b8181036040830152614107818b6133a3565b9050614116606083018a6138b5565b61412360808301896138b5565b61413060a08301886138b5565b61413d60c083018761402e565b61414a60e083018661402e565b81810361010083015261415d8185614052565b905061416d6101208301846138b5565b9b9a5050505050505050505050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b60006141d860318361334e565b91506141e38261417c565b604082019050919050565b60006020820190508181036000830152614207816141cb565b9050919050565b7f4e6f742065786973747300000000000000000000000000000000000000000000600082015250565b6000614244600a8361334e565b915061424f8261420e565b602082019050919050565b6000602082019050818103600083015261427381614237565b9050919050565b600060608201905061428f60008301866138b5565b61429c60208301856138b5565b6142a960408301846138b5565b949350505050565b600060c0820190506142c66000830189613493565b6142d360208301886138b5565b6142e060408301876138b5565b6142ed60608301866138b5565b81810360808301526142ff81856133a3565b905061430e60a08301846138b5565b979650505050505050565b7f5469636b65742074797065206e6f742065787369740000000000000000000000600082015250565b600061434f60158361334e565b915061435a82614319565b602082019050919050565b6000602082019050818103600083015261437e81614342565b9050919050565b7f4e6f7420636f727265637420616d6f756e74206f66206d6f6e65790000000000600082015250565b60006143bb601b8361334e565b91506143c682614385565b602082019050919050565b600060208201905081810360008301526143ea816143ae565b9050919050565b7f4e6f7420696e2073656c6c696e672074696d6500000000000000000000000000600082015250565b600061442760138361334e565b9150614432826143f1565b602082019050919050565b600060208201905081810360008301526144568161441a565b9050919050565b7f4e6f207469636b6574206c656674000000000000000000000000000000000000600082015250565b6000614493600e8361334e565b915061449e8261445d565b602082019050919050565b600060208201905081810360008301526144c281614486565b9050919050565b60006144d4826137d6565b91507f800000000000000000000000000000000000000000000000000000000000000082141561450757614506613e91565b5b600182039050919050565b600060a08201905061452760008301886138b5565b61453460208301876138b5565b6145416040830186613493565b81810360608301526145538185614052565b9050614562608083018461402e565b9695505050505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006145a260208361334e565b91506145ad8261456c565b602082019050919050565b600060208201905081810360008301526145d181614595565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b600061463460298361334e565b915061463f826145d8565b604082019050919050565b6000602082019050818103600083015261466381614627565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b60006146c6602a8361334e565b91506146d18261466a565b604082019050919050565b600060208201905081810360008301526146f5816146b9565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b600061475860408361334e565b9150614763826146fc565b604082019050919050565b600060208201905081810360008301526147878161474b565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b60006147ea602f8361334e565b91506147f58261478e565b604082019050919050565b60006020820190508181036000830152614819816147dd565b9050919050565b600081905092915050565b600061483682613343565b6148408185614820565b935061485081856020860161335f565b80840191505092915050565b6000614868828561482b565b9150614874828461482b565b91508190509392505050565b7f4f6e6c79206974656d206f776e65722063616e20706572666f726d207468697360008201527f206f7065726174696f6e00000000000000000000000000000000000000000000602082015250565b60006148dc602a8361334e565b91506148e782614880565b604082019050919050565b6000602082019050818103600083015261490b816148cf565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b600061496e60248361334e565b915061497982614912565b604082019050919050565b6000602082019050818103600083015261499d81614961565b9050919050565b600060a0820190506149b96000830188613493565b6149c66020830187613493565b6149d360408301866138b5565b6149e06060830185613319565b6149ed60808301846138b5565b9695505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000614a5360268361334e565b9150614a5e826149f7565b604082019050919050565b60006020820190508181036000830152614a8281614a46565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000614ae5602c8361334e565b9150614af082614a89565b604082019050919050565b60006020820190508181036000830152614b1481614ad8565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000614b7760258361334e565b9150614b8282614b1b565b604082019050919050565b60006020820190508181036000830152614ba681614b6a565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000614c0960248361334e565b9150614c1482614bad565b604082019050919050565b60006020820190508181036000830152614c3881614bfc565b9050919050565b7f4861766520746f206265206f6e776572206f6620746f6b656e00000000000000600082015250565b6000614c7560198361334e565b9150614c8082614c3f565b602082019050919050565b60006020820190508181036000830152614ca481614c68565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000614ce160208361334e565b9150614cec82614cab565b602082019050919050565b60006020820190508181036000830152614d1081614cd4565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614d4d601c8361334e565b9150614d5882614d17565b602082019050919050565b60006020820190508181036000830152614d7c81614d40565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614db960198361334e565b9150614dc482614d83565b602082019050919050565b60006020820190508181036000830152614de881614dac565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000614e4b60328361334e565b9150614e5682614def565b604082019050919050565b60006020820190508181036000830152614e7a81614e3e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614ebb826133fe565b9150614ec6836133fe565b925082614ed657614ed5614e81565b5b828204905092915050565b6000614eec826133fe565b9150614ef7836133fe565b925082614f0757614f06614e81565b5b828206905092915050565b600081519050919050565b600082825260208201905092915050565b6000614f3982614f12565b614f438185614f1d565b9350614f5381856020860161335f565b614f5c81613392565b840191505092915050565b6000608082019050614f7c6000830187613493565b614f896020830186613493565b614f9660408301856138b5565b8181036060830152614fa88184614f2e565b905095945050505050565b600081519050614fc2816132b4565b92915050565b600060208284031215614fde57614fdd61327e565b5b6000614fec84828501614fb3565b9150509291505056fea2646970667358221220b95d29311cd9d281d8864b8362d014d208eb215c4be2bdc1451beea1a833805d64736f6c63430008080033687474703a2f2f6c6f63616c686f73743a353030302f6576656e742d7469636b65742f646174612f',
  deployedBytecode:
    '0x6080604052600436106101c25760003560e01c806355f804b3116100f7578063a22cb46511610095578063c87b56dd11610064578063c87b56dd14610603578063e219fc7514610640578063e985e9c51461065c578063f2fde38b14610699576101c2565b8063a22cb46514610579578063ae677aa3146105a2578063b88d4fde146105be578063be9af536146105e7576101c2565b8063715018a6116100d1578063715018a6146104e15780638da5cb5b146104f857806395d89b41146105235780639cbf9e361461054e576101c2565b806355f804b31461043e5780636352211e1461046757806370a08231146104a4576101c2565b8063202e374011610164578063294e0d561161013e578063294e0d561461039157806342842e0e146103ba57806345f8fa80146103e35780634868cd631461040e576101c2565b8063202e37401461031457806323b872dd1461033f5780632529851014610368576101c2565b8063095ea7b3116101a0578063095ea7b31461026c5780630f08efe0146102955780630fbfe0e9146102c057806312e85585146102e9576101c2565b806301ffc9a7146101c757806306fdde0314610204578063081812fc1461022f575b600080fd5b3480156101d357600080fd5b506101ee60048036038101906101e991906132e0565b6106c2565b6040516101fb9190613328565b60405180910390f35b34801561021057600080fd5b506102196107a4565b60405161022691906133dc565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190613434565b610836565b60405161026391906134a2565b60405180910390f35b34801561027857600080fd5b50610293600480360381019061028e91906134e9565b6108bb565b005b3480156102a157600080fd5b506102aa6109d3565b6040516102b7919061367f565b60405180910390f35b3480156102cc57600080fd5b506102e760048036038101906102e2919061380c565b610c3c565b005b3480156102f557600080fd5b506102fe610de1565b60405161030b91906138c4565b60405180910390f35b34801561032057600080fd5b50610329610deb565b604051610336919061367f565b60405180910390f35b34801561034b57600080fd5b50610366600480360381019061036191906138df565b6110d9565b005b34801561037457600080fd5b5061038f600480360381019061038a9190613932565b611139565b005b34801561039d57600080fd5b506103b860048036038101906103b39190613985565b611219565b005b3480156103c657600080fd5b506103e160048036038101906103dc91906138df565b611376565b005b3480156103ef57600080fd5b506103f8611396565b604051610405919061367f565b60405180910390f35b61042860048036038101906104239190613434565b611684565b60405161043591906138c4565b60405180910390f35b34801561044a57600080fd5b50610465600480360381019061046091906139f4565b6118b1565b005b34801561047357600080fd5b5061048e60048036038101906104899190613434565b611947565b60405161049b91906134a2565b60405180910390f35b3480156104b057600080fd5b506104cb60048036038101906104c69190613a3d565b6119f9565b6040516104d891906138c4565b60405180910390f35b3480156104ed57600080fd5b506104f6611ab1565b005b34801561050457600080fd5b5061050d611b39565b60405161051a91906134a2565b60405180910390f35b34801561052f57600080fd5b50610538611b63565b60405161054591906133dc565b60405180910390f35b34801561055a57600080fd5b50610563611bf5565b60405161057091906138c4565b60405180910390f35b34801561058557600080fd5b506105a0600480360381019061059b9190613a96565b611c20565b005b6105bc60048036038101906105b79190613434565b611c36565b005b3480156105ca57600080fd5b506105e560048036038101906105e09190613b77565b611cbc565b005b61060160048036038101906105fc9190613434565b611d1e565b005b34801561060f57600080fd5b5061062a60048036038101906106259190613434565b611f78565b60405161063791906133dc565b60405180910390f35b61065a60048036038101906106559190613bfa565b61201f565b005b34801561066857600080fd5b50610683600480360381019061067e9190613c3a565b612236565b6040516106909190613328565b60405180910390f35b3480156106a557600080fd5b506106c060048036038101906106bb9190613a3d565b6122ca565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061078d57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061079d575061079c826123c2565b5b9050919050565b6060600080546107b390613ca9565b80601f01602080910402602001604051908101604052809291908181526020018280546107df90613ca9565b801561082c5780601f106108015761010080835404028352916020019161082c565b820191906000526020600020905b81548152906001019060200180831161080f57829003601f168201915b5050505050905090565b60006108418261242c565b610880576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087790613d4d565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006108c682611947565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610937576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092e90613ddf565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610956612498565b73ffffffffffffffffffffffffffffffffffffffff16148061098557506109848161097f612498565b612236565b5b6109c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bb90613e71565b60405180910390fd5b6109ce83836124a0565b505050565b606060006109e1600c612559565b905060006109ef600b612559565b6109f9600c612559565b610a039190613ec0565b90506000808267ffffffffffffffff811115610a2257610a216136ab565b5b604051908082528060200260200182016040528015610a5b57816020015b610a48613174565b815260200190600190039081610a405790505b50905060005b84811015610c31573073ffffffffffffffffffffffffffffffffffffffff16600e6000600184610a919190613ef4565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610c1e576000600182610aee9190613ef4565b90506000600e60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff161515151581525050848681518110610c0157610c00613f4a565b5b6020026020010181905250600185610c199190613ef4565b945050505b8080610c2990613f79565b915050610a61565b508094505050505090565b60008411610c7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c769061400e565b60405180910390fd5b610c89600a612567565b6000610c95600a612559565b9050604051806101200160405280888152602001428152602001878152602001868152602001858152602001848152602001838152602001838152602001600115158152506010600083815260200190815260200160002060008201518160000155602082015181600101556040820151816002019080519060200190610d1d9291906131d1565b50606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e082015181600701556101008201518160080160006101000a81548160ff0219169083151502179055509050506000600f600089815260200190815260200160002090507f23e43aa87fb6cd6e0767623783aeb3c1c4aab2dd562879333c14e692a2a6d348884289898989898a896004018b604051610dcf9a999897969594939291906140d2565b60405180910390a15050505050505050565b6000600d54905090565b60606000610df96008612559565b905060008060005b83811015610ea2573373ffffffffffffffffffffffffffffffffffffffff16600e6000600184610e319190613ef4565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e8f57600183610e8c9190613ef4565b92505b8080610e9a90613f79565b915050610e01565b5060008267ffffffffffffffff811115610ebf57610ebe6136ab565b5b604051908082528060200260200182016040528015610ef857816020015b610ee5613174565b815260200190600190039081610edd5790505b50905060005b848110156110ce573373ffffffffffffffffffffffffffffffffffffffff16600e6000600184610f2e9190613ef4565b815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156110bb576000600182610f8b9190613ef4565b90506000600e60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152505084868151811061109e5761109d613f4a565b5b60200260200101819052506001856110b69190613ef4565b945050505b80806110c690613f79565b915050610efe565b508094505050505090565b6110ea6110e4612498565b8261257d565b611129576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611120906141ee565b60405180910390fd5b61113483838361265b565b505050565b60011515600f600085815260200190815260200160002060050160009054906101000a900460ff161515146111a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119a9061425a565b60405180910390fd5b81600f60008581526020019081526020016000206002018190555080600f6000858152602001908152602001600020600201819055507f7068eff53d4130b0bc23272635506565df6c5b683e458708df42b5468245b7bd83838360405161120c9392919061427a565b60405180910390a1505050565b6112236009612567565b600061122f6009612559565b90506040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200142815260200185815260200184815260200183815260200160011515815250600f600083815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030155608082015181600401908051906020019061130b9291906131d1565b5060a08201518160050160006101000a81548160ff0219169083151502179055509050507ff721e33d46866b7b414e72296025134f1a7942e8b66fa29295f2158d6d8f6a35334286868686604051611368969594939291906142b1565b60405180910390a150505050565b61139183838360405180602001604052806000815250611cbc565b505050565b606060006113a46008612559565b905060008060005b8381101561144d573373ffffffffffffffffffffffffffffffffffffffff16600e60006001846113dc9190613ef4565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561143a576001836114379190613ef4565b92505b808061144590613f79565b9150506113ac565b5060008267ffffffffffffffff81111561146a576114696136ab565b5b6040519080825280602002602001820160405280156114a357816020015b611490613174565b8152602001906001900390816114885790505b50905060005b84811015611679573373ffffffffffffffffffffffffffffffffffffffff16600e60006001846114d99190613ef4565b815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156116665760006001826115369190613ef4565b90506000600e60008381526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820160009054906101000a900460ff16151515158152505084868151811061164957611648613f4a565b5b60200260200101819052506001856116619190613ef4565b945050505b808061167190613f79565b9150506114a9565b508094505050505090565b60008060106000848152602001908152602001600020905060008160030154116116e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116da90614365565b60405180910390fd5b34816003015414611729576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611720906143d1565b60405180910390fd5b4281600401541180156117515750601060008481526020019081526020016000206005015442105b611790576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117879061443d565b60405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff816006015414806117c6575060008160060154135b611805576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117fc906144a9565b60405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81600601541461184b57806007016000815480929190611845906144c9565b91905055505b6000611855611bf5565b905061186181856128c2565b7f8f452c855319507558f448a0bc0d50aa975f3508ef157722a8c8cdc006def7eb81853385600201866007015460405161189f959493929190614512565b60405180910390a18092505050919050565b6118b9612498565b73ffffffffffffffffffffffffffffffffffffffff166118d7611b39565b73ffffffffffffffffffffffffffffffffffffffff161461192d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611924906145b8565b60405180910390fd5b80600790805190602001906119439291906131d1565b5050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156119f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e79061464a565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a61906146dc565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b611ab9612498565b73ffffffffffffffffffffffffffffffffffffffff16611ad7611b39565b73ffffffffffffffffffffffffffffffffffffffff1614611b2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b24906145b8565b60405180910390fd5b611b376000612954565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054611b7290613ca9565b80601f0160208091040260200160405190810160405280929190818152602001828054611b9e90613ca9565b8015611beb5780601f10611bc057610100808354040283529160200191611beb565b820191906000526020600020905b815481529060010190602001808311611bce57829003601f168201915b5050505050905090565b6000611c016008612567565b6000611c0d6008612559565b9050611c193382612a1a565b8091505090565b611c32611c2b612498565b8383612bf4565b5050565b611c3e612498565b73ffffffffffffffffffffffffffffffffffffffff16611c5c611b39565b73ffffffffffffffffffffffffffffffffffffffff1614611cb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ca9906145b8565b60405180910390fd5b80600d8190555050565b611ccd611cc7612498565b8361257d565b611d0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d03906141ee565b60405180910390fd5b611d1884848484612d61565b50505050565b6000600e60008381526020019081526020016000206003015490506000600e600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050813414611db6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dad9061476e565b60405180910390fd5b33600e600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600e600085815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506000600e600085815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611e9a600b612567565b611ea530338561265b565b611ead611b39565b73ffffffffffffffffffffffffffffffffffffffff166108fc600d549081150290604051600060405180830381858888f19350505050158015611ef4573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015611f3b573d6000803e3d6000fd5b507f5edde87e7efe9511fd280717315e9a4c5f46a6a84becfc74084b59e48154084483604051611f6b91906138c4565b60405180910390a1505050565b6060611f838261242c565b611fc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fb990614800565b60405180910390fd5b6000611fcc612dbd565b90506000815111611fec5760405180602001604052806000815250612017565b80611ff684612e4f565b60405160200161200792919061485c565b6040516020818303038152906040525b915050919050565b3373ffffffffffffffffffffffffffffffffffffffff1661203f83611947565b73ffffffffffffffffffffffffffffffffffffffff1614612095576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208c906148f2565b60405180910390fd5b600d5434146120d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120d090614984565b60405180910390fd5b6120e3600c612567565b60006120ef600c612559565b90506000600e600083815260200190815260200160002060040160006101000a81548160ff02191690831515021790555081600e60008381526020019081526020016000206003018190555033600e600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600e600083815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506121f033308561265b565b827f2d68735082042d66c5027bd8c6f7e29d9eaa7ce21cd00f9671f170b22a091d283330856000866040516122299594939291906149a4565b60405180910390a2505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6122d2612498565b73ffffffffffffffffffffffffffffffffffffffff166122f0611b39565b73ffffffffffffffffffffffffffffffffffffffff1614612346576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161233d906145b8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156123b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123ad90614a69565b60405180910390fd5b6123bf81612954565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661251383611947565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b6001816000016000828254019250508190555050565b60006125888261242c565b6125c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125be90614afb565b60405180910390fd5b60006125d283611947565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061261457506126138185612236565b5b8061265257508373ffffffffffffffffffffffffffffffffffffffff1661263a84610836565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661267b82611947565b73ffffffffffffffffffffffffffffffffffffffff16146126d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126c890614b8d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612741576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161273890614c1f565b60405180910390fd5b61274c838383612fb0565b6127576000826124a0565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546127a79190613ec0565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546127fe9190613ef4565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46128bd838383612fb5565b505050565b6128cb82611947565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612938576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161292f90614c8b565b60405180910390fd5b8060116000848152602001908152602001600020819055505050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612a8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a8190614cf7565b60405180910390fd5b612a938161242c565b15612ad3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612aca90614d63565b60405180910390fd5b612adf60008383612fb0565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612b2f9190613ef4565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612bf060008383612fb5565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612c63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c5a90614dcf565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612d549190613328565b60405180910390a3505050565b612d6c84848461265b565b612d7884848484612fba565b612db7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dae90614e61565b60405180910390fd5b50505050565b606060078054612dcc90613ca9565b80601f0160208091040260200160405190810160405280929190818152602001828054612df890613ca9565b8015612e455780601f10612e1a57610100808354040283529160200191612e45565b820191906000526020600020905b815481529060010190602001808311612e2857829003601f168201915b5050505050905090565b60606000821415612e97576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612fab565b600082905060005b60008214612ec9578080612eb290613f79565b915050600a82612ec29190614eb0565b9150612e9f565b60008167ffffffffffffffff811115612ee557612ee46136ab565b5b6040519080825280601f01601f191660200182016040528015612f175781602001600182028036833780820191505090505b5090505b60008514612fa457600182612f309190613ec0565b9150600a85612f3f9190614ee1565b6030612f4b9190613ef4565b60f81b818381518110612f6157612f60613f4a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85612f9d9190614eb0565b9450612f1b565b8093505050505b919050565b505050565b505050565b6000612fdb8473ffffffffffffffffffffffffffffffffffffffff16613151565b15613144578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02613004612498565b8786866040518563ffffffff1660e01b81526004016130269493929190614f67565b602060405180830381600087803b15801561304057600080fd5b505af192505050801561307157506040513d601f19601f8201168201806040525081019061306e9190614fc8565b60015b6130f4573d80600081146130a1576040519150601f19603f3d011682016040523d82523d6000602084013e6130a6565b606091505b506000815114156130ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016130e390614e61565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050613149565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b8280546131dd90613ca9565b90600052602060002090601f0160209004810192826131ff5760008555613246565b82601f1061321857805160ff1916838001178555613246565b82800160010185558215613246579182015b8281111561324557825182559160200191906001019061322a565b5b5090506132539190613257565b5090565b5b80821115613270576000816000905550600101613258565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6132bd81613288565b81146132c857600080fd5b50565b6000813590506132da816132b4565b92915050565b6000602082840312156132f6576132f561327e565b5b6000613304848285016132cb565b91505092915050565b60008115159050919050565b6133228161330d565b82525050565b600060208201905061333d6000830184613319565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561337d578082015181840152602081019050613362565b8381111561338c576000848401525b50505050565b6000601f19601f8301169050919050565b60006133ae82613343565b6133b8818561334e565b93506133c881856020860161335f565b6133d181613392565b840191505092915050565b600060208201905081810360008301526133f681846133a3565b905092915050565b6000819050919050565b613411816133fe565b811461341c57600080fd5b50565b60008135905061342e81613408565b92915050565b60006020828403121561344a5761344961327e565b5b60006134588482850161341f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061348c82613461565b9050919050565b61349c81613481565b82525050565b60006020820190506134b76000830184613493565b92915050565b6134c681613481565b81146134d157600080fd5b50565b6000813590506134e3816134bd565b92915050565b60008060408385031215613500576134ff61327e565b5b600061350e858286016134d4565b925050602061351f8582860161341f565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61355e816133fe565b82525050565b600061356f82613461565b9050919050565b61357f81613564565b82525050565b61358e8161330d565b82525050565b60a0820160008201516135aa6000850182613555565b5060208201516135bd6020850182613576565b5060408201516135d06040850182613576565b5060608201516135e36060850182613555565b5060808201516135f66080850182613585565b50505050565b60006136088383613594565b60a08301905092915050565b6000602082019050919050565b600061362c82613529565b6136368185613534565b935061364183613545565b8060005b8381101561367257815161365988826135fc565b975061366483613614565b925050600181019050613645565b5085935050505092915050565b600060208201905081810360008301526136998184613621565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6136e382613392565b810181811067ffffffffffffffff82111715613702576137016136ab565b5b80604052505050565b6000613715613274565b905061372182826136da565b919050565b600067ffffffffffffffff821115613741576137406136ab565b5b61374a82613392565b9050602081019050919050565b82818337600083830152505050565b600061377961377484613726565b61370b565b905082815260208101848484011115613795576137946136a6565b5b6137a0848285613757565b509392505050565b600082601f8301126137bd576137bc6136a1565b5b81356137cd848260208601613766565b91505092915050565b6000819050919050565b6137e9816137d6565b81146137f457600080fd5b50565b600081359050613806816137e0565b92915050565b60008060008060008060c087890312156138295761382861327e565b5b600061383789828a0161341f565b965050602087013567ffffffffffffffff81111561385857613857613283565b5b61386489828a016137a8565b955050604061387589828a0161341f565b945050606061388689828a0161341f565b935050608061389789828a0161341f565b92505060a06138a889828a016137f7565b9150509295509295509295565b6138be816133fe565b82525050565b60006020820190506138d960008301846138b5565b92915050565b6000806000606084860312156138f8576138f761327e565b5b6000613906868287016134d4565b9350506020613917868287016134d4565b92505060406139288682870161341f565b9150509250925092565b60008060006060848603121561394b5761394a61327e565b5b60006139598682870161341f565b935050602061396a8682870161341f565b925050604061397b8682870161341f565b9150509250925092565b60008060006060848603121561399e5761399d61327e565b5b60006139ac8682870161341f565b93505060206139bd8682870161341f565b925050604084013567ffffffffffffffff8111156139de576139dd613283565b5b6139ea868287016137a8565b9150509250925092565b600060208284031215613a0a57613a0961327e565b5b600082013567ffffffffffffffff811115613a2857613a27613283565b5b613a34848285016137a8565b91505092915050565b600060208284031215613a5357613a5261327e565b5b6000613a61848285016134d4565b91505092915050565b613a738161330d565b8114613a7e57600080fd5b50565b600081359050613a9081613a6a565b92915050565b60008060408385031215613aad57613aac61327e565b5b6000613abb858286016134d4565b9250506020613acc85828601613a81565b9150509250929050565b600067ffffffffffffffff821115613af157613af06136ab565b5b613afa82613392565b9050602081019050919050565b6000613b1a613b1584613ad6565b61370b565b905082815260208101848484011115613b3657613b356136a6565b5b613b41848285613757565b509392505050565b600082601f830112613b5e57613b5d6136a1565b5b8135613b6e848260208601613b07565b91505092915050565b60008060008060808587031215613b9157613b9061327e565b5b6000613b9f878288016134d4565b9450506020613bb0878288016134d4565b9350506040613bc18782880161341f565b925050606085013567ffffffffffffffff811115613be257613be1613283565b5b613bee87828801613b49565b91505092959194509250565b60008060408385031215613c1157613c1061327e565b5b6000613c1f8582860161341f565b9250506020613c308582860161341f565b9150509250929050565b60008060408385031215613c5157613c5061327e565b5b6000613c5f858286016134d4565b9250506020613c70858286016134d4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613cc157607f821691505b60208210811415613cd557613cd4613c7a565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000613d37602c8361334e565b9150613d4282613cdb565b604082019050919050565b60006020820190508181036000830152613d6681613d2a565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000613dc960218361334e565b9150613dd482613d6d565b604082019050919050565b60006020820190508181036000830152613df881613dbc565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000613e5b60388361334e565b9150613e6682613dff565b604082019050919050565b60006020820190508181036000830152613e8a81613e4e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613ecb826133fe565b9150613ed6836133fe565b925082821015613ee957613ee8613e91565b5b828203905092915050565b6000613eff826133fe565b9150613f0a836133fe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613f3f57613f3e613e91565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613f84826133fe565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613fb757613fb6613e91565b5b600182019050919050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000613ff8601c8361334e565b915061400382613fc2565b602082019050919050565b6000602082019050818103600083015261402781613feb565b9050919050565b614037816137d6565b82525050565b60008190508160005260206000209050919050565b6000815461405f81613ca9565b614069818661334e565b945060018216600081146140845760018114614096576140c9565b60ff19831686526020860193506140c9565b61409f8561403d565b60005b838110156140c1578154818901526001820191506020810190506140a2565b808801955050505b50505092915050565b6000610140820190506140e8600083018d6138b5565b6140f5602083018c6138b5565b8181036040830152614107818b6133a3565b9050614116606083018a6138b5565b61412360808301896138b5565b61413060a08301886138b5565b61413d60c083018761402e565b61414a60e083018661402e565b81810361010083015261415d8185614052565b905061416d6101208301846138b5565b9b9a5050505050505050505050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b60006141d860318361334e565b91506141e38261417c565b604082019050919050565b60006020820190508181036000830152614207816141cb565b9050919050565b7f4e6f742065786973747300000000000000000000000000000000000000000000600082015250565b6000614244600a8361334e565b915061424f8261420e565b602082019050919050565b6000602082019050818103600083015261427381614237565b9050919050565b600060608201905061428f60008301866138b5565b61429c60208301856138b5565b6142a960408301846138b5565b949350505050565b600060c0820190506142c66000830189613493565b6142d360208301886138b5565b6142e060408301876138b5565b6142ed60608301866138b5565b81810360808301526142ff81856133a3565b905061430e60a08301846138b5565b979650505050505050565b7f5469636b65742074797065206e6f742065787369740000000000000000000000600082015250565b600061434f60158361334e565b915061435a82614319565b602082019050919050565b6000602082019050818103600083015261437e81614342565b9050919050565b7f4e6f7420636f727265637420616d6f756e74206f66206d6f6e65790000000000600082015250565b60006143bb601b8361334e565b91506143c682614385565b602082019050919050565b600060208201905081810360008301526143ea816143ae565b9050919050565b7f4e6f7420696e2073656c6c696e672074696d6500000000000000000000000000600082015250565b600061442760138361334e565b9150614432826143f1565b602082019050919050565b600060208201905081810360008301526144568161441a565b9050919050565b7f4e6f207469636b6574206c656674000000000000000000000000000000000000600082015250565b6000614493600e8361334e565b915061449e8261445d565b602082019050919050565b600060208201905081810360008301526144c281614486565b9050919050565b60006144d4826137d6565b91507f800000000000000000000000000000000000000000000000000000000000000082141561450757614506613e91565b5b600182039050919050565b600060a08201905061452760008301886138b5565b61453460208301876138b5565b6145416040830186613493565b81810360608301526145538185614052565b9050614562608083018461402e565b9695505050505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006145a260208361334e565b91506145ad8261456c565b602082019050919050565b600060208201905081810360008301526145d181614595565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b600061463460298361334e565b915061463f826145d8565b604082019050919050565b6000602082019050818103600083015261466381614627565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b60006146c6602a8361334e565b91506146d18261466a565b604082019050919050565b600060208201905081810360008301526146f5816146b9565b9050919050565b7f506c65617365207375626d6974207468652061736b696e67207072696365206960008201527f6e206f7264657220746f20636f6d706c65746520746865207075726368617365602082015250565b600061475860408361334e565b9150614763826146fc565b604082019050919050565b600060208201905081810360008301526147878161474b565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b60006147ea602f8361334e565b91506147f58261478e565b604082019050919050565b60006020820190508181036000830152614819816147dd565b9050919050565b600081905092915050565b600061483682613343565b6148408185614820565b935061485081856020860161335f565b80840191505092915050565b6000614868828561482b565b9150614874828461482b565b91508190509392505050565b7f4f6e6c79206974656d206f776e65722063616e20706572666f726d207468697360008201527f206f7065726174696f6e00000000000000000000000000000000000000000000602082015250565b60006148dc602a8361334e565b91506148e782614880565b604082019050919050565b6000602082019050818103600083015261490b816148cf565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b600061496e60248361334e565b915061497982614912565b604082019050919050565b6000602082019050818103600083015261499d81614961565b9050919050565b600060a0820190506149b96000830188613493565b6149c66020830187613493565b6149d360408301866138b5565b6149e06060830185613319565b6149ed60808301846138b5565b9695505050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000614a5360268361334e565b9150614a5e826149f7565b604082019050919050565b60006020820190508181036000830152614a8281614a46565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000614ae5602c8361334e565b9150614af082614a89565b604082019050919050565b60006020820190508181036000830152614b1481614ad8565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000614b7760258361334e565b9150614b8282614b1b565b604082019050919050565b60006020820190508181036000830152614ba681614b6a565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000614c0960248361334e565b9150614c1482614bad565b604082019050919050565b60006020820190508181036000830152614c3881614bfc565b9050919050565b7f4861766520746f206265206f6e776572206f6620746f6b656e00000000000000600082015250565b6000614c7560198361334e565b9150614c8082614c3f565b602082019050919050565b60006020820190508181036000830152614ca481614c68565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000614ce160208361334e565b9150614cec82614cab565b602082019050919050565b60006020820190508181036000830152614d1081614cd4565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614d4d601c8361334e565b9150614d5882614d17565b602082019050919050565b60006020820190508181036000830152614d7c81614d40565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000614db960198361334e565b9150614dc482614d83565b602082019050919050565b60006020820190508181036000830152614de881614dac565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000614e4b60328361334e565b9150614e5682614def565b604082019050919050565b60006020820190508181036000830152614e7a81614e3e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614ebb826133fe565b9150614ec6836133fe565b925082614ed657614ed5614e81565b5b828204905092915050565b6000614eec826133fe565b9150614ef7836133fe565b925082614f0757614f06614e81565b5b828206905092915050565b600081519050919050565b600082825260208201905092915050565b6000614f3982614f12565b614f438185614f1d565b9350614f5381856020860161335f565b614f5c81613392565b840191505092915050565b6000608082019050614f7c6000830187613493565b614f896020830186613493565b614f9660408301856138b5565b8181036060830152614fa88184614f2e565b905095945050505050565b600081519050614fc2816132b4565b92915050565b600060208284031215614fde57614fdd61327e565b5b6000614fec84828501614fb3565b9150509291505056fea2646970667358221220b95d29311cd9d281d8864b8362d014d208eb215c4be2bdc1451beea1a833805d64736f6c63430008080033',
  devdoc: {
    kind: 'dev',
    methods: {
      'approve(address,uint256)': {
        details: 'See {IERC721-approve}.',
      },
      'balanceOf(address)': {
        details: 'See {IERC721-balanceOf}.',
      },
      'getApproved(uint256)': {
        details: 'See {IERC721-getApproved}.',
      },
      'isApprovedForAll(address,address)': {
        details: 'See {IERC721-isApprovedForAll}.',
      },
      'name()': {
        details: 'See {IERC721Metadata-name}.',
      },
      'owner()': {
        details: 'Returns the address of the current owner.',
      },
      'ownerOf(uint256)': {
        details: 'See {IERC721-ownerOf}.',
      },
      'renounceOwnership()': {
        details:
          'Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.',
      },
      'safeTransferFrom(address,address,uint256)': {
        details: 'See {IERC721-safeTransferFrom}.',
      },
      'safeTransferFrom(address,address,uint256,bytes)': {
        details: 'See {IERC721-safeTransferFrom}.',
      },
      'setApprovalForAll(address,bool)': {
        details: 'See {IERC721-setApprovalForAll}.',
      },
      'supportsInterface(bytes4)': {
        details: 'See {IERC165-supportsInterface}.',
      },
      'symbol()': {
        details: 'See {IERC721Metadata-symbol}.',
      },
      'tokenURI(uint256)': {
        details: 'See {IERC721Metadata-tokenURI}.',
      },
      'transferFrom(address,address,uint256)': {
        details: 'See {IERC721-transferFrom}.',
      },
      'transferOwnership(address)': {
        details:
          'Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.',
      },
    },
    version: 1,
  },
  userdoc: {
    kind: 'user',
    methods: {},
    version: 1,
  },
  storageLayout: {
    storage: [
      {
        astId: 130,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_name',
        offset: 0,
        slot: '0',
        type: 't_string_storage',
      },
      {
        astId: 132,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_symbol',
        offset: 0,
        slot: '1',
        type: 't_string_storage',
      },
      {
        astId: 136,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_owners',
        offset: 0,
        slot: '2',
        type: 't_mapping(t_uint256,t_address)',
      },
      {
        astId: 140,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_balances',
        offset: 0,
        slot: '3',
        type: 't_mapping(t_address,t_uint256)',
      },
      {
        astId: 144,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_tokenApprovals',
        offset: 0,
        slot: '4',
        type: 't_mapping(t_uint256,t_address)',
      },
      {
        astId: 150,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_operatorApprovals',
        offset: 0,
        slot: '5',
        type: 't_mapping(t_address,t_mapping(t_address,t_bool))',
      },
      {
        astId: 7,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_owner',
        offset: 0,
        slot: '6',
        type: 't_address',
      },
      {
        astId: 1902,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: 'baseURI',
        offset: 0,
        slot: '7',
        type: 't_string_storage',
      },
      {
        astId: 2022,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_tokenIds',
        offset: 0,
        slot: '8',
        type: 't_struct(Counter)1582_storage',
      },
      {
        astId: 2025,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_eventIds',
        offset: 0,
        slot: '9',
        type: 't_struct(Counter)1582_storage',
      },
      {
        astId: 2028,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_typeTicketIds',
        offset: 0,
        slot: '10',
        type: 't_struct(Counter)1582_storage',
      },
      {
        astId: 2031,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_itemsSold',
        offset: 0,
        slot: '11',
        type: 't_struct(Counter)1582_storage',
      },
      {
        astId: 2034,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: '_marketIds',
        offset: 0,
        slot: '12',
        type: 't_struct(Counter)1582_storage',
      },
      {
        astId: 2037,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: 'listingPrice',
        offset: 0,
        slot: '13',
        type: 't_uint256',
      },
      {
        astId: 2042,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: 'idToMarketItem',
        offset: 0,
        slot: '14',
        type: 't_mapping(t_uint256,t_struct(MarketItem)2067_storage)',
      },
      {
        astId: 2047,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: 'idToEvent',
        offset: 0,
        slot: '15',
        type: 't_mapping(t_uint256,t_struct(Event)1936_storage)',
      },
      {
        astId: 2052,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: 'idToTicketType',
        offset: 0,
        slot: '16',
        type: 't_mapping(t_uint256,t_struct(TicketType)1981_storage)',
      },
      {
        astId: 2056,
        contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
        label: 'idTokenToIdTicketType',
        offset: 0,
        slot: '17',
        type: 't_mapping(t_uint256,t_uint256)',
      },
    ],
    types: {
      t_address: {
        encoding: 'inplace',
        label: 'address',
        numberOfBytes: '20',
      },
      t_address_payable: {
        encoding: 'inplace',
        label: 'address payable',
        numberOfBytes: '20',
      },
      t_bool: {
        encoding: 'inplace',
        label: 'bool',
        numberOfBytes: '1',
      },
      t_int256: {
        encoding: 'inplace',
        label: 'int256',
        numberOfBytes: '32',
      },
      't_mapping(t_address,t_bool)': {
        encoding: 'mapping',
        key: 't_address',
        label: 'mapping(address => bool)',
        numberOfBytes: '32',
        value: 't_bool',
      },
      't_mapping(t_address,t_mapping(t_address,t_bool))': {
        encoding: 'mapping',
        key: 't_address',
        label: 'mapping(address => mapping(address => bool))',
        numberOfBytes: '32',
        value: 't_mapping(t_address,t_bool)',
      },
      't_mapping(t_address,t_uint256)': {
        encoding: 'mapping',
        key: 't_address',
        label: 'mapping(address => uint256)',
        numberOfBytes: '32',
        value: 't_uint256',
      },
      't_mapping(t_uint256,t_address)': {
        encoding: 'mapping',
        key: 't_uint256',
        label: 'mapping(uint256 => address)',
        numberOfBytes: '32',
        value: 't_address',
      },
      't_mapping(t_uint256,t_struct(Event)1936_storage)': {
        encoding: 'mapping',
        key: 't_uint256',
        label: 'mapping(uint256 => struct NFTTicketMarketplace.Event)',
        numberOfBytes: '32',
        value: 't_struct(Event)1936_storage',
      },
      't_mapping(t_uint256,t_struct(MarketItem)2067_storage)': {
        encoding: 'mapping',
        key: 't_uint256',
        label: 'mapping(uint256 => struct NFTTicketMarketplace.MarketItem)',
        numberOfBytes: '32',
        value: 't_struct(MarketItem)2067_storage',
      },
      't_mapping(t_uint256,t_struct(TicketType)1981_storage)': {
        encoding: 'mapping',
        key: 't_uint256',
        label: 'mapping(uint256 => struct NFTTicketMarketplace.TicketType)',
        numberOfBytes: '32',
        value: 't_struct(TicketType)1981_storage',
      },
      't_mapping(t_uint256,t_uint256)': {
        encoding: 'mapping',
        key: 't_uint256',
        label: 'mapping(uint256 => uint256)',
        numberOfBytes: '32',
        value: 't_uint256',
      },
      t_string_storage: {
        encoding: 'bytes',
        label: 'string',
        numberOfBytes: '32',
      },
      't_struct(Counter)1582_storage': {
        encoding: 'inplace',
        label: 'struct Counters.Counter',
        members: [
          {
            astId: 1581,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: '_value',
            offset: 0,
            slot: '0',
            type: 't_uint256',
          },
        ],
        numberOfBytes: '32',
      },
      't_struct(Event)1936_storage': {
        encoding: 'inplace',
        label: 'struct NFTTicketMarketplace.Event',
        members: [
          {
            astId: 1925,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'owner',
            offset: 0,
            slot: '0',
            type: 't_address',
          },
          {
            astId: 1927,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'createdTime',
            offset: 0,
            slot: '1',
            type: 't_uint256',
          },
          {
            astId: 1929,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'startTime',
            offset: 0,
            slot: '2',
            type: 't_uint256',
          },
          {
            astId: 1931,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'endTime',
            offset: 0,
            slot: '3',
            type: 't_uint256',
          },
          {
            astId: 1933,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'id',
            offset: 0,
            slot: '4',
            type: 't_string_storage',
          },
          {
            astId: 1935,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'exist',
            offset: 0,
            slot: '5',
            type: 't_bool',
          },
        ],
        numberOfBytes: '192',
      },
      't_struct(MarketItem)2067_storage': {
        encoding: 'inplace',
        label: 'struct NFTTicketMarketplace.MarketItem',
        members: [
          {
            astId: 2058,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'tokenId',
            offset: 0,
            slot: '0',
            type: 't_uint256',
          },
          {
            astId: 2060,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'seller',
            offset: 0,
            slot: '1',
            type: 't_address_payable',
          },
          {
            astId: 2062,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'owner',
            offset: 0,
            slot: '2',
            type: 't_address_payable',
          },
          {
            astId: 2064,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'price',
            offset: 0,
            slot: '3',
            type: 't_uint256',
          },
          {
            astId: 2066,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'sold',
            offset: 0,
            slot: '4',
            type: 't_bool',
          },
        ],
        numberOfBytes: '160',
      },
      't_struct(TicketType)1981_storage': {
        encoding: 'inplace',
        label: 'struct NFTTicketMarketplace.TicketType',
        members: [
          {
            astId: 1964,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'eventId',
            offset: 0,
            slot: '0',
            type: 't_uint256',
          },
          {
            astId: 1966,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'createdTime',
            offset: 0,
            slot: '1',
            type: 't_uint256',
          },
          {
            astId: 1968,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'id',
            offset: 0,
            slot: '2',
            type: 't_string_storage',
          },
          {
            astId: 1970,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'price',
            offset: 0,
            slot: '3',
            type: 't_uint256',
          },
          {
            astId: 1972,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'startSellingTime',
            offset: 0,
            slot: '4',
            type: 't_uint256',
          },
          {
            astId: 1974,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'endSellingTime',
            offset: 0,
            slot: '5',
            type: 't_uint256',
          },
          {
            astId: 1976,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'totalLimit',
            offset: 0,
            slot: '6',
            type: 't_int256',
          },
          {
            astId: 1978,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'currentLimit',
            offset: 0,
            slot: '7',
            type: 't_int256',
          },
          {
            astId: 1980,
            contract: 'contracts/NFTTicketMarketplace.sol:NFTTicketMarketplace',
            label: 'exist',
            offset: 0,
            slot: '8',
            type: 't_bool',
          },
        ],
        numberOfBytes: '288',
      },
      t_uint256: {
        encoding: 'inplace',
        label: 'uint256',
        numberOfBytes: '32',
      },
    },
  },
};
