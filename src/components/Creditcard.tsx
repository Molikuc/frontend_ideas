import { Nfc } from "lucide-react";
import { Icons } from "./Icons";

const Creditcard = () => {
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
        <div className="flex flex-col bg-zinc-300 shadow-xl mx-8 px-8 rounded-xl">
          <div className="text-2xl my-[1.3331rem]">
            Enter your Credit Card Detail
          </div>
          <input
            type="number"
            placeholder="Card Number"
            min="0"
            className="no-spinners outline-none bg-zinc-300"
          />
          <select
            id="expirationMonth"
            name="expirationMonth"
            className="outline-none bg-zinc-300"
          >
            <option value="" disabled selected>
              Month
            </option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <input
            type="number"
            placeholder="Year"
            min="0"
            className="no-spinners outline-none bg-zinc-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Creditcard;
