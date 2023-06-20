'use client'
import useShowDebound from "@/hooks/useShowDebound";
import { useMemo } from "react";

export const ellipsisAddress = (address: string, prefixLength = 13, suffixLength = 4) => {
  address = address || ''
  return `${address.substr(0, prefixLength)}...${address.substr(address?.length - suffixLength, suffixLength)}`
}

/* eslint-disable @next/next/no-img-element */
const NFTRendererUI = ({ nft }: { nft: any }) => {
  const { setShow, show } = useShowDebound()
  const { setShow: setShowAddress, show: showAddress } = useShowDebound()

  const renderItems = useMemo(() => {
    const nfts = nft?.items || []
    let result = []
    for (let i = 0; i < 6; i++) {
      if (nfts[i]?.image) {
        if (i === 5) {
          result.push(<div className="w-full h-full rounded-lg">
          <div className="flex items-center justify-center w-full h-full rounded-lg bg-black/20">
            <span className="text-lg font-bold text-white">+{nfts?.length - 5}</span>
          </div>
        </div>)
        } else {
          result.push(<div className="relative w-full h-full rounded-lg" style={{ border: '2px dashed #f2f2f2' }}>
            <div
              className="w-full h-auto bg-center bg-no-repeat bg-contain aspect-square rounded-xl"
              style={{
                backgroundImage:
                  `url(${nfts[i]?.image})`,
              }}
            ></div>
          </div>)
        }
      } else {
        result.push(<div className="w-full h-full rounded-lg"><div className="w-full h-full border-[2px] border-white border-dashed bg-white/50 rounded-lg"></div></div>)
      }
    }
    return result
  }, [nft])

  return (
    <div className="w-screen h-screen bg-white">
      <div className="relative max-h-screen mx-auto bg-gradient-to-b from-[#ab96d3] via-[#fbaaac] to-[#ffe8c4] max-w-screen aspect-square overflow-hidden">
        <div className="relative w-full h-full">
          <div className="absolute z-[9] bottom-0 w-full h-6"></div>
          <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className={`absolute z-10 w-full px-4 transition bottom-6 ${!show && 'translate-y-full'}`}>
            <div className="flex items-end justify-between w-full">
              <div></div>
              <div className="relative flex items-center px-2 py-1 space-x-2 duration-1000 rounded-t-lg cursor-pointer transition-width h-fit bg-white/60 w-fit">
                <div className="w-4 h-4">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 316.55 316.54"
                  >
                    <defs></defs>
                    <path
                      fillRule="evenodd"
                      d="m158.27,0C70.86,0,0,70.86,0,158.27s70.86,158.27,158.27,158.27,158.27-70.86,158.27-158.27S245.68,0,158.27,0Zm54.1,67.35c-15.29-14.95-40.61-17.23-62.16-13.51-22.5,3.89-46.84,15.16-63.19,34.73-21.17,25.21-26.64,61.4-21.09,92.74,5.51,31.13,22.94,62.68,53.72,74.72l.14.05c48.1,18.29,114.1-15,138.37-81.03,3.03-8.25-1.2-17.39-9.44-20.42-8.25-3.03-17.39,1.2-20.42,9.44-19.85,54-69.84,72.6-97.13,62.29-16.47-6.48-29.46-25.48-33.9-50.6-4.41-24.92.65-50.7,14.14-66.75l.03-.04c10.45-12.51,27.3-20.87,44.19-23.79,17.84-3.08,30.12.65,34.48,4.89.53.53,1.59,2.02,2,5.94.41,3.95-.01,9.03-1.21,14.81-2.4,11.58-7.23,22.75-9.24,26.67-2.37,4.6-6.89,12.84-12.81,19.64-6.38,7.32-11.19,9.38-14.02,9.3-1.63-.12-3.23-.55-4.7-1.27-1.51-.74-2.86-1.77-3.97-3.03-1.11-1.26-1.97-2.73-2.51-4.32-.55-1.59-.77-3.27-.67-4.95.1-1.68.54-3.32,1.28-4.83.74-1.51,1.77-2.86,3.03-3.97,1.26-1.11,2.73-1.97,4.32-2.51,1.59-.55,3.27-.77,4.95-.67,8.77.55,16.32-6.12,16.87-14.89.55-8.77-6.12-16.32-14.89-16.87-5.85-.37-11.71.42-17.26,2.33-5.54,1.9-10.66,4.87-15.05,8.75-4.39,3.88-7.98,8.58-10.56,13.85-2.58,5.26-4.09,10.98-4.46,16.83-.37,5.85.42,11.71,2.32,17.26,1.9,5.54,4.87,10.66,8.75,15.05,3.88,4.39,8.58,7.98,13.85,10.56,5.26,2.58,10.98,4.09,16.83,4.46h.23c18.1.88,31.66-11,39.65-20.17,8.52-9.79,14.45-20.82,17.1-25.96,3-5.83,8.99-19.73,12.11-34.77,1.56-7.53,2.57-16.15,1.7-24.55-.87-8.41-3.79-17.94-11.36-25.37l-.02-.02Z"
                    ></path>
                  </svg>
                </div>
                <p onMouseEnter={() => setShowAddress(true)} onMouseLeave={() => setShowAddress(false)} className="text-xs font-bold md:text-base">{showAddress ? nft?.tbaAddress : ellipsisAddress(nft?.tbaAddress, 4, 4)}</p>
              </div>
            </div>
            <div className="grid w-full grid-cols-6 p-3 rounded-lg rounded-tr-none gap-x-3 bg-white/60">
              {renderItems}
            </div>
          </div>
          <div className="relative w-full">
            <div className="grid w-full grid-cols-1 grid-rows-1 transition ">
              {nft?.images?.map((i: string) => (
                <img
                key={i}
                src={i}
                alt={nft?.name}
                className="col-span-1 col-start-1 row-span-1 row-start-1 translate-x-0"
              />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTRendererUI;
