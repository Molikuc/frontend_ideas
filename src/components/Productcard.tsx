"use client";

import Image from "next/image";
import Pineapple from "@/images/pineapple.jpg";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useState } from "react";

const Productcard = () => {
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="h-screen">
      <div className="text-7xl flex justify-center">Product Card</div>
      <div className="max-h-[50rem] my-8 bg-slate-200 grid grid-cols-3 ">
        <Image
          className="p-4"
          src={Pineapple}
          width={300}
          height={300}
          alt="Picture of the product"
        />

        <div className="col-span-2 p-4 pl-10 flex gap-5 flex-col bg-slate-800 text-slate-100">
          <h2 className="text-xl text-slate-500">Fruits</h2>
          <h1 className="text-3xl mt-[-1rem]">Pineapple</h1>
          <div className="text-6xl font-extralight">$500</div>
          <div className="text-2xl">DESCRIPTION :</div>
          <div className="text-xl text-slate-400 mt-[-1rem]">
            This is a pineapple. Nice one I promise you need one
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-center">QUANTITY</div>
              <div className="flex justify-center w-fit gap-1 p-1 px-4 rounded-full bg-slate-700 ">
                <button
                  onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                  className="text-xl min-w-[1.6rem]"
                >
                  -
                </button>
                <div className="text-xl min-w-[1.6rem] text-center">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-xl min-w-[1.6rem]"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div>TOTAL PRICE</div>
              <div className="text-2xl rounded-full bg-slate-700 px-4 p-0.5 min-w-[7rem] text-center">
                ${quantity >= 1 ? quantity * 500 : 0}
              </div>
            </div>
          </div>
          <div className="flex justify-around">
            <button className="rounded-full w-1/2 p-3 cursor-pointer font-bold text-black bg-teal-400 hover:bg-teal-500 active:bg-teal-600">
              ADD TO CART
            </button>
            <div
              className="cursor-pointer text-4xl flex items-center text-teal-400"
              onClick={handleClick}
            >
              {favorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
