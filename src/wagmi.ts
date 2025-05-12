import { http, createConfig } from 'wagmi'
import { defineChain } from 'viem'
import { farcasterFrame as miniAppConnector } from '@farcaster/frame-wagmi-connector'

// تعریف شبکه تستی Monad
const monad = defineChain({
  id: 20180425,
  name: 'Monad Testnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.monad.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monad Explorer',
      url: 'https://explorer.testnet.monad.xyz',
    },
  },
})

export const config = createConfig({
  chains: [monad],
  transports: {
    [monad.id]: http(),
  },
  connectors: [
    miniAppConnector(),
  ],
})
