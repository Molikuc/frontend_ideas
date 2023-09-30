"use client";

import Image from "next/image";
import { IoBatteryFullOutline } from "react-icons/io5";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdSignalCellularAlt,
  MdWifi,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";
import ramen from "@/images/ramen.jpg";
import { Star } from "lucide-react";
import { useState } from "react";

const Location = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-4xl mb-5">Signup Card for Phone</div>
      <div
        className="h-[844px] w-[390px] bg-[url('/thumbnail/Maps.png')] bg-[length:550px]  rounded-2xl shadow-2xl flex flex-col gap-2 px-3 sm:p-0"
        style={{ backgroundPosition: "-3rem 0" }}
      >
        <div>
          <div className="flex h-[370px] justify-between ">
            <div className="ml-4 mt-2">11:31</div>
            <div className="flex mr-3 mt-2 gap-1 text-lg">
              <MdSignalCellularAlt />
              <MdWifi />
              <div>
                <IoBatteryFullOutline />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-100 h-[474px]">
          <Image
            src={ramen}
            width={500}
            height={500}
            alt="ramen photo"
            className="rounded-t-2xl object-cover h-[200px]"
          />
          <div className="mx-8">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center mt-8">
                <div className="text-3xl ">Ramen Shop</div>
                <div
                  className="text-3xl select-none cursor-pointer"
                  onClick={() => setFavorite(!favorite)}
                >
                  {favorite ? (
                    <div className="text-[#3055b1]">
                      <MdFavorite />
                    </div>
                  ) : (
                    <MdFavoriteBorder />
                  )}
                </div>
              </div>
              <div className="text-[#F27C0D] flex items-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <div className="text-black ml-3">(12k)</div>
              </div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eros tellus, consectetur sed suscipit vitae, tempor sit amet
                diam.
              </div>
              <div className="bg-[#3055b1] p-3 rounded-2xl text-white text-center active:bg-[#213a7b] cursor-pointer select-none">
                Let&rsquo;s move
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
