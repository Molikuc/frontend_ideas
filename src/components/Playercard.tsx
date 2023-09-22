"use client";

import Image from "next/image";
import ph1 from "@/images/ph-1.jpg";
import {
  MdShuffle,
  MdRepeat,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdPause,
  MdPlayArrow,
  MdFavoriteBorder,
  MdFavorite,
  MdMoreHoriz,
} from "react-icons/md";
import { useState } from "react";

const Playercard = () => {
  const [favorite, setFavorite] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5">Player Card</div>
      <div className="flex flex-col items-center bg-zinc-200 w-[30rem] shadow-xl pb-7 rounded-lg overflow-hidden">
        <div className="h-[20rem]">
          <Image
            className="object-cover h-full object-[50%_20%] "
            src={ph1}
            width={600}
            height={600}
            alt="Picture of PH-1"
          />
        </div>
        <div className="w-full my-7">
          <div className="flex justify-around mb-5">
            <div
              className="text-3xl cursor-pointer"
              onClick={() => setShuffle(!shuffle)}
            >
              {shuffle ? (
                <div className="text-green-600">
                  <MdShuffle />
                </div>
              ) : (
                <div>
                  <MdShuffle />
                </div>
              )}
            </div>
            <div>
              <div className="text-center font-bold text-lg">Homebody</div>
              <div className="text-center">Ph-1</div>
            </div>
            <div
              className="text-3xl cursor-pointer"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? (
                <div className="text-green-600">
                  <MdFavorite />
                </div>
              ) : (
                <MdFavoriteBorder />
              )}
            </div>
          </div>
          <div className="mb-16">
            <div className="flex justify-center mb-2">
              <div className="relative rounded-full w-[16.5rem] bg-zinc-400 h-[3px]">
                <span className="absolute left-0 rounded-full w-[2rem]  bg-green-600 h-[3px]"></span>
              </div>
            </div>
            <div className="flex justify-around text-[12px]">
              <div>0:30</div>
              <div>3:30</div>
            </div>
          </div>
          <div className="flex justify-around mt-5 items-center">
            <div
              className="text-2xl cursor-pointer"
              onClick={() => setRepeat(!repeat)}
            >
              {repeat ? (
                <div className="text-green-600">
                  <MdRepeat />
                </div>
              ) : (
                <MdRepeat />
              )}
            </div>
            <div className="text-3xl cursor-pointer">
              <MdKeyboardArrowLeft />
            </div>
            <div
              className="text-3xl border-2 p-5 border-zinc-600 rounded-full cursor-pointer"
              onClick={() => setPlay(!play)}
            >
              {play ? <MdPause /> : <MdPlayArrow />}
            </div>
            <div className="text-3xl cursor-pointer">
              <MdKeyboardArrowRight />
            </div>
            <div className="text-2xl cursor-pointer">
              <MdMoreHoriz />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//TODO
//Change fonts of 'Homebody'

export default Playercard;
