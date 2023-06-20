import NFTRendererUI from "./page.client";

export default async function NFTRenderer({ params: {address,chainId,id} }: { params: { chainId: number, address: string, id: string }}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/nft/${chainId}/${address}/${id}`)
  const nft = await res.json()
  return (
    <NFTRendererUI nft={nft} />
  )
}
