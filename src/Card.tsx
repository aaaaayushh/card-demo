import { CardProps } from "./App";

function Card({coinName,currPrice,currChange,tvl,pairs,coinImg} : CardProps){
    return(
        <div className="flex flex-col align-center w-full mt-8">
            <div className="h-16 w-32 top-16 bg-[#14172b] mx-auto rounded-tl-xl rounded-bl-full rounded-br-full relative">
                <div className="relative mx-auto rounded-full -top-12 h-24 w-24 bg-gradient-to-b from-[rgba(98,106,136,0.1)] to-[rgba(220,31,255,0.1)]">
                    <img alt="coin logo" className="relative w-12 mx-auto top-6" src={`${coinImg}.png`}/>
                </div>
            </div>
            <div className='bg-gradient-to-b from-[rgba(98,106,136,0.1)] to-[rgba(46,49,73,0.1)] rounded-3xl p-8 flex flex-col'>
                <p className="mt-12 mb-4 text-[#737BAE] font-semibold text-center">{coinName}</p>
                <div className="flex bg-[#14172b] items-center text-white justify-center py-2 rounded-[17px] 2xl:shadow-inner">
                    <p className={`invisible my-auto font-semibold text-sm`}>
                        {currChange}%
                    </p>
                    <p className="mr-auto text-center flex-1">${currPrice > 0 ? currPrice.toLocaleString() : currPrice}</p>

                    <p className={`ml-auto mr-2 ${currChange < 0 ? "text-red-500":"text-green-500"} my-auto font-semibold text-sm`}>
                        {currChange}%
                    </p>

                </div>
                <p className="mb-4 mt-2 text-[#737BAE] text-center font-semibold">Price</p>
                <div className="flex py-2 bg-[#14172b] text-white justify-center rounded-[17px] 2xl:shadow-inner">
                    <p className="text-center">${tvl > 0 ? tvl.toLocaleString() : tvl}</p>
                </div>
                <p className="text-[#737BAE] font-semibold text-center mt-2 mb-4">TVL</p>
                <div className="bg-[#14172b] w-full md:w-3/5 flex mx-auto justify-center rounded-[17px]">
                    {pairs.map((pair,id)=>
                        <img alt="popular pairing" key={id} className="mx-auto w-8 py-2 " src={`${pair}.png`}/>
                    )}
                </div>
                <p className="text-[#737BAE] font-semibold text-center mt-2">Popular Pairs</p>
                
            </div>
        </div>
    );
}
export default Card;