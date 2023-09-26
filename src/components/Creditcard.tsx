"use client";

import { Nfc } from "lucide-react";
import { Icons } from "./Icons";
import { useState } from "react";

const Creditcard = () => {
  const [expirationDate, setExpirationDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    const formattedValue =
      name === "expirationDate"
        ? value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d{0,2})/, "$1/$2")
            .slice(0, 5)
        : value;

    setExpirationDate(formattedValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Delete") {
      setExpirationDate((prevValue) => {
        if (prevValue.charAt(prevValue.length - 1) === "/") {
          return prevValue.slice(0, -1);
        }
        return prevValue.slice(0, -1);
      });
      e.preventDefault();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5 mb-10">Credit Card</div>
      <div className="flex">
        <div className="bg-gradient-to-b from-indigo-500 via bg-purple-500 h-[16rem] w-[27rem] rounded-3xl text-white shadow-xl">
          <div className="flex justify-between mx-8 my-[1.3331rem]">
            <div>Professional</div>
            <Nfc className="text-white" />
          </div>
          <Icons.creditcard className="h-12 w-12 mx-8" />
          <div className="text-2xl mx-8 my-[1.3331rem]">
            1234 5678 9876 1234
          </div>
          <div className="flex justify-between items-center mx-8 mb-[1.3331rem]">
            <div>
              <div className="text-xs opacity-90">Card Holder</div>
              <div>Your Name</div>
            </div>
            <div>
              <div className="text-xs opacity-90">Expiry Date</div>
              <div>00/00</div>
            </div>
            <Icons.visa className="h-14 w-14" />
          </div>
        </div>
        <div className="flex flex-col bg-zinc-200 shadow-xl mx-8 px-8 w-[20rem] rounded-lg">
          <div className="text-2xl my-[1.3331rem] text-center">
            Enter your Credit Card Detail
          </div>
          <input
            type="number"
            placeholder="Card Number"
            min="0"
            className="no-spinners outline-none bg-zinc-200 p-2 border-2 border-zinc-300 mb-8"
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="MM/YY"
            maxLength={5}
            value={expirationDate}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            className="outline-none bg-zinc-200 p-2 w-1/2 border-2 border-zinc-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Creditcard;
