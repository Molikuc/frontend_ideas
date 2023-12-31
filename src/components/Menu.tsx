"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Icons } from "./Icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(null);

  //@ts-ignore
  const toggleMenu = (item) => {
    menuOpen === item ? setMenuOpen(null) : setMenuOpen(item);
  };
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5">Menu Animation</div>
      <div className="mb-8">
        I didn&rsquo;t put animation on categories. I am using Framer Motion
      </div>
      <div className="h-[844px] w-[390px] bg-slate-100 rounded-2xl shadow-2xl flex flex-col px-3 sm:p-0">
        <div className="border-b-2 ">
          <div className="flex justify-between mx-8 mb-4 items-center ">
            <div className="flex gap-2">
              <Icons.uniqlojp className="h-8 w-8" />
              <Icons.uniqlo className="h-8 w-8" />
            </div>
            <X className="h-8 w-8" />
          </div>
        </div>
        <div className="flex justify-center w-full overflow-hidden">
          <motion.div
            className={`w-full ${menuOpen ? "ml-[-100%]" : ""}`}
            initial={{ x: "0%" }}
            animate={{ x: menuOpen ? "-100%" : "0%" }}
            transition={{ duration: 0.3 }}
          >
            <div
              //@ts-ignore
              onClick={() => toggleMenu("WOMEN")}
              className="flex justify-between border-b-2  h-14 items-center cursor-pointer"
            >
              <div className="ml-3">WOMEN</div>
              <ChevronRight className="mr-3" />
            </div>
            <div
              //@ts-ignore
              onClick={() => toggleMenu("MEN")}
              className="flex justify-between border-b-2 h-14 items-center cursor-pointer"
            >
              <div className="ml-3">MEN</div>
              <ChevronRight className="mr-3" />
            </div>
            <div
              //@ts-ignore
              onClick={() => toggleMenu("KIDS")}
              className="flex justify-between border-b-2 h-14 items-center cursor-pointer"
            >
              <div className="ml-3">KIDS</div>
              <ChevronRight className="mr-3" />
            </div>
            <div
              //@ts-ignore
              onClick={() => toggleMenu("BABY")}
              className="flex justify-between border-b-2 h-14 items-center cursor-pointer"
            >
              <div className="ml-3">BABY</div>
              <ChevronRight className="mr-3" />
            </div>
          </motion.div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className=" w-full"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <div
                  onClick={() => toggleMenu(null)}
                  className="flex justify-between border-b-2 h-14 items-center cursor-pointer"
                >
                  <ChevronLeft className="ml-3" />
                  <div className="mr-3">{menuOpen}</div>
                </div>
                <div className="flex justify-between border-b-2 h-14 items-center cursor-pointer">
                  <div className="ml-3">SHOP BY COLLECTION</div>
                  <ChevronRight className="mr-3" />
                </div>
                <div className="flex justify-between border-b-2 h-14 items-center cursor-pointer">
                  {menuOpen === "KIDS" ? (
                    <div className="ml-3">SHOP BY CATEGORY (AGE 3+)</div>
                  ) : menuOpen === "BABY" ? (
                    <div className="ml-3">SHOP BY CATEGORY (0 - 4 YEARS)</div>
                  ) : (
                    <div className="ml-3">SHOP BY CATEGORY</div>
                  )}
                  <ChevronRight className="mr-3" />
                </div>
                <div className="flex justify-between border-b-2 h-14 items-center cursor-pointer">
                  <div className="ml-3">FEATURED</div>
                  <ChevronRight className="mr-3" />
                </div>
                <div className="flex justify-between border-b-2 h-14 items-center cursor-pointer">
                  <div className="ml-3">COLLABORATIONS</div>
                  <ChevronRight className="mr-3" />
                </div>
                <div className="flex justify-between border-b-2 h-14 items-center cursor-pointer">
                  <div className="ml-3">DISCOVER LIFEWEAR</div>
                  <ChevronRight className="mr-3" />
                </div>
                <div className="flex justify-between border-b-2 h-14 items-center cursor-pointer">
                  <div className="ml-3">SALE & LIMITED OFFERS</div>
                  <ChevronRight className="mr-3" />
                </div>
                {menuOpen === "KIDS" ? (
                  <div className="flex justify-between border-b-2 h-14 items-center cursor-pointer">
                    <div className="ml-3">NEW ARRIVALS</div>
                    <ChevronRight className="mr-3" />
                  </div>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-auto mb-3">
          <div className="flex justify-center">
            <div className="h-[4px] w-1/3 bg-slate-500 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
