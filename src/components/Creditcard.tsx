import { Nfc } from "lucide-react";
import { Icons } from "./Icons";

const Creditcard = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5 mb-10">Credit Card</div>
      <div className="bg-gradient-to-b from-indigo-500 via bg-purple-500 h-[16rem] w-[27rem] rounded-3xl text-white">
        <div className="flex justify-between mx-8 my-[1.3331rem]">
          <div>Professional</div>
          <Nfc className="text-white" />
        </div>
        <Icons.creditcard className="h-12 w-12 mx-8" />
        <div className="text-2xl mx-8 my-[1.3331rem]">1234 5678 9876 1234</div>
        <div className="flex justify-between items-center mx-8 mb-[1.3331rem]">
          <div>
            <div className="text-xs">Card Holder</div>
            <div>Your Name</div>
          </div>
          <div>
            <div className="text-xs">Expiry Date</div>
            <div>00/00</div>
          </div>
          <Icons.visa className="h-14 w-14" />
        </div>
      </div>
    </div>
  );
};

export default Creditcard;
