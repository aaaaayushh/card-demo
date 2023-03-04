import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

export interface CardProps{
  coinName: string;
  currPrice: number;
  currChange : number;
  tvl: number;
  pairs: Array<string>;
  coinImg:string;
}

function App() {
  const data : Array<CardProps> = [
    {
      coinName:"Solana (SOL)",
      currChange:-12.35,
      currPrice:2345,
      tvl:60000,
      pairs:["bitcoin","ethereum","binance"]
      ,coinImg:"solana"
    },
    {
      coinName:"Bitcoin (BTC)",
      currChange:10,
      currPrice:31812,
      tvl:60000,
      pairs:["solana","ethereum","binance"],
    coinImg:"bitcoin"
    },
    {
      coinName:"Ethereum (ETH)",
      currChange:-11.93,
      currPrice:1466.45,
      tvl:60000,
      pairs:["solana","bitcoin","binance"],
      coinImg:"ethereum"
    },
    {
      coinName:"Binance USD (BUSD)",
      currChange: 0.26,
      currPrice:1,
      tvl:60000,
      pairs:["solana","ethereum","binance"],
      coinImg:"binance"
    },
    {
      coinName:"Shiba Inu (SHIB)",
      currChange: -8.1,
      currPrice:0.00001948,
      tvl:60000,
      pairs:["solana","ethereum","binance"],
      coinImg:"shiba"
    }
  ]
  return (
    <div className="flex flex-wrap justify-center bg-[#14172b] h-full">

      {data.map((card)=>(
        <div className="w-full sm:w-5/12 md:w-4/12 lg:w-3/12 2xl:w-2/12 mx-8">
          <Card coinName={card.coinName} currChange={card.currChange} currPrice={card.currPrice} tvl={card.tvl} pairs={card.pairs} coinImg={card.coinImg} />
        </div>
      ))}
    </div>
  );
}

export default App;
