"use client";

import Image from "next/image";
import { IoBatteryFullOutline } from "react-icons/io5";
import { MdSignalCellularAlt, MdWifi } from "react-icons/md";
import verif from "@/images/palm-recognition.svg";
import { Delete } from "lucide-react";
import { useState } from "react";

const Verification = () => {
  const [input, setInput] = useState(["", "", "", ""]);

  //@ts-ignore
  const handleNumberClick = (number) => {
    const newInput = [...input];
    const emptyIndex = newInput.findIndex((value) => value === "");

    if (emptyIndex !== -1) {
      newInput[emptyIndex] = number;
      setInput(newInput);
    }
  };

  const handleClear = () => {
    setInput(["", "", "", ""]);
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-4xl mb-5">Signup Card for Phone</div>
      <div className="h-[844px] w-[390px] bg-slate-200 rounded-2xl shadow-2xl flex flex-col gap-2 px-3 sm:p-0">
        <div className="bg-slate-100 rounded-2xl">
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
          <div className="flex justify-center h-[320px]">
            <Image src={verif} height={350} width={350} alt="Verification" />
          </div>
          <div className="text-center text-xl mb-8">
            Enter your verification Code.
          </div>
          <div className="flex justify-center gap-3 ">
            {input.map((num, index) => (
              <div
                key={index}
                className="bg-slate-200 rounded-lg h-16 w-16 text-center flex items-center justify-center"
              >
                {num}
              </div>
            ))}
          </div>
          <div className="bg-yellow-300 rounded-lg shadow-lg p-3 text-center font-bold my-4 mx-8 cursor-pointer active:bg-yellow-400 select-none">
            Verify
          </div>
        </div>
        <div className="grid grid-cols-3 mx-8 gap-2">
          <div
            onClick={() => handleNumberClick("1")}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            1
          </div>
          <div
            onClick={() => handleNumberClick(2)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            2
          </div>
          <div
            onClick={() => handleNumberClick(3)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            3
          </div>
          <div
            onClick={() => handleNumberClick(4)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            4
          </div>
          <div
            onClick={() => handleNumberClick(5)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            5
          </div>
          <div
            onClick={() => handleNumberClick(6)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            6
          </div>
          <div
            onClick={() => handleNumberClick(7)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            7
          </div>
          <div
            onClick={() => handleNumberClick(8)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            8
          </div>
          <div
            onClick={() => handleNumberClick(9)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            9
          </div>
          <div className="bg-zinc-100 rounded-md p-3 flex items-center justify-center font-bold text-xl"></div>
          <div
            onClick={() => handleNumberClick(0)}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            0
          </div>
          <div
            onClick={handleClear}
            className="bg-zinc-100 rounded-md cursor-pointer p-3 flex items-center justify-center font-bold text-xl active:bg-zinc-300 select-none"
          >
            <Delete />
          </div>
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

export default Verification;
