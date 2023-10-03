"use client";

import {
  ArrowLeft,
  Home,
  Plus,
  Search,
  ShoppingBag,
  Coffee,
  User,
} from "lucide-react";
import Image from "next/image";
import { IoBatteryFullOutline } from "react-icons/io5";
import { MdSignalCellularAlt, MdWifi } from "react-icons/md";
import icecoffee from "@/images/icecoffee.png";
import { useState } from "react";

const CoffeeMenu = () => {
  const [cart, setCart] = useState(0);
  const [selectedSection, setSelectedSection] = useState(null);

  let searchStyle =
    "rounded-full cursor-pointer border-2 p-2 h-10 w-10 flex justify-center items-center";

  const sections = [
    { id: 2, label: "Top Picks" },
    { id: 3, label: "Iced" },
    { id: 4, label: "Hot" },
  ];

  const handleItemClick = () => {
    setCart(cart + 1);
  };

  const handleSectionClick = (sectionId: any) => {
    setSelectedSection(sectionId);
  };

  console.log(selectedSection);

  return (
    <div className="h-full flex flex-col items-center ">
      <div className="text-4xl mb-5">Coffee Menu Mobile</div>
      <div className="h-[844px] w-[390px] bg-slate-100 rounded-2xl shadow-2xl flex flex-col gap-2 px-3 sm:p-0">
        <div>
          <div className="flex justify-between">
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
        <div className="flex justify-between mx-8 mt-[1.331rem]">
          <ArrowLeft />
          <div className="relative">
            <ShoppingBag />

            {cart === 0 ? null : (
              <div className="absolute left-[50%] top-[-30%] rounded-full bg-[#0A3FC2] h-6 w-6 p-2 text-white flex justify-center items-center">
                <div className="text-xs">{cart}</div>
              </div>
            )}
          </div>
        </div>
        <div className="text-3xl mx-8 my-[1.3331rem]">Coffee</div>
        <div className="h-full ">
          <div className="flex gap-2 ml-8 overflow-scroll no-scrollbar">
            <div
              onClick={() => handleSectionClick(1)}
              className={`${
                selectedSection === 1
                  ? (searchStyle += " border-[#0A3FC2]")
                  : (searchStyle += " border-slate-300")
              }`}
            >
              <Search className="h-4 w-4" />
            </div>
            {sections.map((section) => (
              <div
                key={section.id}
                className={` ${
                  selectedSection === section.id
                    ? "rounded-full border-2 border-[#0A3FC2] select-none cursor-pointer px-5 h-10 flex items-center"
                    : "rounded-full border-2 h-10 px-5 flex items-center border-slate-300 cursor-pointer"
                } `}
                onClick={() => handleSectionClick(section.id)}
              >
                {section.label}
              </div>
            ))}
          </div>

          <div className="mx-[1.3331rem] mt-8 flex flex-col gap-[2rem]">
            <div className="flex rounded-full h-[4.7rem] bg-slate-100 shadow-lg relative justify-between items-center">
              <div className="flex gap-3 items-center ml-8">
                <Image
                  src={icecoffee}
                  className="h-auto w-[50px] relative  transform -translate-y-3"
                  alt="Coffee Image"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col">
                  <div className="text-xl">Expresso</div>
                  <div>$3</div>
                </div>
              </div>
              <button
                onClick={handleItemClick}
                className="rounded-full bg-[#0A3FC2] h-10 w-10 flex items-center justify-center text-white mr-8"
              >
                <Plus />
              </button>
            </div>
            <div className="flex rounded-full h-[4.7rem] bg-slate-100 shadow-lg relative justify-between items-center">
              <div className="flex gap-3 items-center ml-8">
                <Image
                  src={icecoffee}
                  className="h-auto w-[50px] relative transform -translate-y-3"
                  alt="Coffee Image"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col">
                  <div className="text-xl">Ice Latte</div>
                  <div>$3</div>
                </div>
              </div>
              <button
                onClick={handleItemClick}
                className="rounded-full bg-[#0A3FC2] h-10 w-10 flex items-center justify-center text-white mr-8"
              >
                <Plus />
              </button>
            </div>
            <div className="flex rounded-full h-[4.7rem] bg-slate-100 shadow-lg relative justify-between items-center">
              <div className="flex gap-3 items-center ml-8">
                <Image
                  src={icecoffee}
                  className="h-auto w-[50px] relative  transform -translate-y-3"
                  alt="Coffee Image"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col">
                  <div className="text-xl">Cappuccino</div>
                  <div>$3</div>
                </div>
              </div>
              <button
                onClick={handleItemClick}
                className="rounded-full bg-[#0A3FC2] h-10 w-10 flex items-center justify-center text-white mr-8"
              >
                <Plus />
              </button>
            </div>
            <div className="flex rounded-full h-[4.7rem] bg-slate-100 shadow-lg relative justify-between items-center">
              <div className="flex gap-3 items-center ml-8">
                <Image
                  src={icecoffee}
                  className="h-auto w-[50px] relative  transform -translate-y-3"
                  alt="Coffee Image"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col">
                  <div className="text-xl">Americano</div>
                  <div>$3</div>
                </div>
              </div>
              <button
                onClick={handleItemClick}
                className="rounded-full bg-[#0A3FC2] h-10 w-10 flex items-center justify-center text-white mr-8"
              >
                <Plus />
              </button>
            </div>
            <div className="flex rounded-full h-[4.7rem] bg-slate-100 shadow-lg relative justify-between items-center">
              <div className="flex gap-3 items-center ml-8">
                <Image
                  src={icecoffee}
                  className="h-auto w-[50px] relative  transform -translate-y-3"
                  alt="Coffee Image"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col">
                  <div className="text-xl">Expresso</div>
                  <div>$3</div>
                </div>
              </div>
              <button
                onClick={handleItemClick}
                className="rounded-full bg-[#0A3FC2] h-10 w-10 flex items-center justify-center text-white mr-8"
              >
                <Plus />
              </button>
            </div>
          </div>
          <div className="mx-8  bg-white flex justify-between rounded-full shadow-lg p-[1.3331rem] ">
            <Home />
            <Coffee className="text-[#0A3FC2]" />
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeMenu;
