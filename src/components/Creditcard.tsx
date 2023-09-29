"use client";

import { Nfc } from "lucide-react";
import { Icons } from "./Icons";
import { useState } from "react";

const Creditcard = () => {
  const [expirationDate, setExpirationDate] = useState("");
  const [cardNumber, setCardNumber] = useState("1234 5678 1234 5678");
  const [name, setName] = useState("");

  //@ts-ignore
  const handleNumber = (e) => {
    const { name, value } = e.target;

    const numeric = value.replace(/\D/g, "");
    //transform the numeric to a JS number with number system is decimal number (10)
    const numericAsNumber = parseInt(numeric, 10);
    const maxAllowed = 9999999999999999;

    if (!isNaN(numericAsNumber) && numericAsNumber <= maxAllowed) {
      setCardNumber(numericAsNumber.toString());
    }
    if (cardNumber === "") {
      setCardNumber("1234 5678 1234 5678");
    }
  };

  //@ts-ignore
  const formattedCardId = (inputNumber) => {
    const regex = /(\d{4})/g;
    const formattedString = inputNumber.replace(regex, "$1 ");
    return formattedString.trim();
  };

  //@ts-ignore
  const handleDate = (e) => {
    const { name, value } = e.target;

    const formattedDate =
      name === "expirationDate"
        ? value
            .replace(/\D/g, "")
            .slice(0, 4)
            .replace(/(\d{2})(\d{0,2})/, "$1/$2")
        : value;

    setExpirationDate(formattedDate);
  };

  //@ts-ignore
  const handleDeleteNumber = (e) => {
    if (e.key === "Backspace") {
      setCardNumber((prevValue) => {
        return prevValue.slice(0, -1);
      });
      e.preventDefault();
    }
  };

  //@ts-ignore
  const handleDeleteDate = (e) => {
    if (e.key === "Backspace") {
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
      <div className="flex flex-col items-center gap-5">
        <div className="bg-gradient-to-b from-indigo-500 via bg-purple-500  sm:h-[16rem] sm:w-[27rem] rounded-3xl text-white shadow-xl">
          <div className="flex justify-between mx-8 my-[1.3331rem]">
            <div>Professional</div>
            <Nfc className="text-white" />
          </div>
          <Icons.creditcard className="h-12 w-12 mx-8" />
          <div className="text-2xl mx-8 my-[1.3331rem]">
            {cardNumber === ""
              ? "1234 5678 1234 5678"
              : formattedCardId(cardNumber)}
          </div>
          <div className="flex justify-between items-center mx-8 mb-[1.3331rem]">
            <div className="w-1/3 mr-8">
              <div className="text-xs opacity-90">Card Holder</div>
              <div>{name === "" ? "Your Name" : name}</div>
            </div>
            <div className="w-1/3">
              <div className="text-xs opacity-90">Expiry Date</div>
              <div>{expirationDate === "" ? "MM/YY" : expirationDate}</div>
            </div>
            <div className="w-1/3 flex justify-center">
              <Icons.visa className="h-14 w-14" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-zinc-200 shadow-xl mx-8 px-8 w-[20rem] rounded-lg">
          <div className="text-2xl my-[1.3331rem] text-center">
            Enter your Credit Card Detail
          </div>
          <input
            type="number"
            name="cardNumber"
            placeholder="Card Number"
            maxLength={16}
            max="9999999999999999"
            onChange={handleNumber}
            onKeyDown={handleDeleteNumber}
            value={cardNumber}
            className="no-spinners outline-none bg-zinc-200 p-2 border-2 border-zinc-300 mb-8"
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="MM/YY"
            maxLength={5}
            value={expirationDate}
            onChange={handleDate}
            onKeyDown={handleDeleteDate}
            className="outline-none bg-zinc-200 p-2 w-1/2 border-2 border-zinc-300 mb-8"
          />
          <input
            type="text"
            placeholder="Your Name"
            maxLength={13}
            onChange={(e) => setName(e.target.value)}
            className="outline-none bg-zinc-200 p-2  border-2 border-zinc-300 mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Creditcard;
