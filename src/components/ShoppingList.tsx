"use client";

import { ChevronLeft, Heart, Home, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { IoBatteryFullOutline } from "react-icons/io5";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdSignalCellularAlt,
  MdWifi,
} from "react-icons/md";
import smartwatch from "@/images/smartwatch.png";

const ShoppingList = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const [favorite, setFavorite] = useState<any[]>([]);
  const [cart, setCart] = useState(0);

  const sections = [
    { id: 1, label: "New" },
    { id: 2, label: "Watches" },
    { id: 3, label: "Vacuum" },
    { id: 4, label: "Kitchen" },
    { id: 5, label: "Illumination" },
  ];

  const items = [
    {
      id: 1,
      image: smartwatch,
      icon: <MdFavoriteBorder />,
      label: "Smart Watch",
      price: "$150",
      button: "Add to Cart",
    },
    {
      id: 2,
      image: smartwatch,
      icon: <MdFavoriteBorder />,
      label: "Vacuum Cleaner",
      price: "$200",
      button: "Add to Cart",
    },
    {
      id: 3,
      image: smartwatch,
      icon: <MdFavoriteBorder />,
      label: "Smart Blender",
      price: "$200",
      button: "Add to Cart",
    },
    {
      id: 4,
      image: smartwatch,
      icon: <MdFavoriteBorder />,
      label: "Smart Kettle",
      price: "$80",
      button: "Add to Cart",
    },
  ];

  const toggleActiveIcon = (iconId: any) => {
    if (favorite.includes(iconId)) {
      setFavorite(favorite.filter((id) => id !== iconId));
    } else {
      setFavorite([...favorite, iconId]);
    }
  };

  const handleSectionClick = (sectionId: any) => {
    setSelectedSection(sectionId);
  };

  const handleCartClick = () => {
    setCart(cart + 1);
  };

  return (
    <div className="h-full flex flex-col items-center ">
      <div className="text-4xl mb-5">Coffee Menu Mobile</div>
      <div className="h-[844px] w-[390px] bg-slate-100 rounded-2xl shadow-2xl flex flex-col gap-2 px-3 sm:p-0 relative">
        <div className="flex justify-between">
          <div className="ml-4 mt-2">11:30</div>
          <div className="flex mr-3 mt-2 gap-1 text-lg">
            <MdSignalCellularAlt />
            <MdWifi />
            <div>
              <IoBatteryFullOutline />
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-1 sm:mx-[1.3331rem] mt-[1.3331rem]">
          <div className="flex gap-[1.3331rem]">
            <ChevronLeft className="cursor-pointer select-none" />
            <div>Categories</div>
          </div>
          <div>
            <div className="relative">
              <ShoppingBag />

              {cart === 0 ? null : (
                <div className="absolute left-[50%] top-[-30%] rounded-full bg-slate-800 h-4 w-4 p-2 text-white flex justify-center items-center">
                  <div className="text-[0.7rem]">{cart}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-2xl my-8 mx-[0.5rem] sm:mx-[1.3331rem]">
          Smart Home
        </div>
        <div className="flex gap-2 ml-[0.5rem] sm:mx-[1.3331rem] text-sm overflow-scroll no-scrollbar">
          {sections.map((section) => (
            <div
              key={section.id}
              className={` ${
                selectedSection === section.id
                  ? "border p-2 bg-slate-200 select-none cursor-pointer"
                  : "border p-2 selecte-none cursor-pointer"
              } `}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.label}
            </div>
          ))}
        </div>
        <div className="flex my-8 mx-[0.5rem] sm:mx-[1.3331rem] gap-2 flex-wrap overflow-y-scroll no-scrollbar">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-200 p-4 w-[48%] rounded-md flex flex-col"
            >
              <div className="flex relative justify-center">
                <Image src={item.image} width={100} alt={"smart object"} />
                <div
                  className="text-2xl absolute left-[90%] cursor-pointer select-none"
                  onClick={() => toggleActiveIcon(item.id as any)}
                >
                  {favorite.includes(item.id) ? <MdFavorite /> : item.icon}
                </div>
              </div>
              <div>{item.label}</div>
              <div className="font-bold">{item.price}</div>
              <div
                className="border border-black px-5 py-2 rounded-md w-full text-sm text-center cursor-pointer select-none active:bg-slate-800 active:text-white"
                onClick={handleCartClick}
              >
                {item.button}
              </div>
            </div>
          ))}
          <div className="h-[22px]"></div>
        </div>
        <div className="absolute bottom-[2%] left-[28%] z-10 shadow-lg bg-slate-100 px-4 py-3 rounded-full">
          <div className="flex gap-8">
            <Home className="cursor-pointer select-none " />
            <Heart className="cursor-pointer select-none" />
            <User className="cursor-pointer select-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
