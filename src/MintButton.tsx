import { useWriteContract } from 'wagmi'

export default function MintButton() {
  const { writeContract } = useWriteContract()

  return (
    <button
      onClick={() =>
        writeContract({
          address: '0x85dcc4acf953436be7c41986560d1bdb144a4bbe',
          abi: [
            {
              name: 'mint',
              type: 'function',
              stateMutability: 'nonpayable',
              inputs: [],
              outputs: [],
            },
          ],
          functionName: 'mint',
        })
      }
    >
      Mint NFT
    </button>
  )
}
