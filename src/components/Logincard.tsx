import { MdSignalCellularAlt, MdWifi, MdOutlineLock } from "react-icons/md";
import { IoBatteryFullOutline } from "react-icons/io5";
import login from "@/images/login.svg";
import Image from "next/image";
import { Icons } from "@/components/Icons";

const Logincard = ({}) => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-4xl mb-5">Login Card for Phone</div>
      <div className="h-[844px] w-[390px] bg-slate-100 rounded-2xl shadow-2xl flex flex-col p-3">
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
        <div className="flex justify-center">
          <Image src={login} width={300} height={300} alt="Login Picture" />
        </div>
        <div className="text-4xl font-bold text-slate-700 mx-5 mb-10">
          Login
        </div>
        <div className="flex mx-5 mb-7">
          <div className="opacity-50 text-2xl mr-2 ">@</div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="h-[30px] w-full border-b-2 bg-slate-100 p-2 outline-none"
          ></input>
        </div>
        <div className="flex mx-5 mb-10 relative">
          <div className="opacity-50 text-2xl mr-2">
            <MdOutlineLock />
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            //@ts-ignore
            maxLength="15"
            className="h-[30px] w-full border-b-2 bg-slate-100  p-2 outline-none"
          ></input>
          <span className="absolute right-5 top-[2px] cursor-pointer text-blue-600 select-none active:text-purple-400">
            Forgot?
          </span>
        </div>
        <div className="bg-blue-600 rounded-xl p-4 text-center text-white font-bold mx-4 mb-8 cursor-pointer select-none active:bg-blue-700">
          Login
        </div>
        <div className="text-center opacity-50 mb-4">Or, login with</div>
        <div className="flex justify-around mx-5 mb-10">
          <div className="border-[2px] rounded-xl p-2 w-[6rem] flex justify-center cursor-pointer hover:bg-slate-200 active:bg-slate-300 select-none">
            <Icons.google className="h-8 w-8" />
          </div>
          <div className="border-[2px] rounded-xl p-2 w-[6rem] flex justify-center cursor-pointer hover:bg-slate-200 active:bg-slate-300 select-none">
            <Icons.facebook className="h-8 w-8" />
          </div>
          <div className="border-[2px] rounded-xl p-2 w-[6rem] flex justify-center cursor-pointer hover:bg-slate-200 active:bg-slate-300 select-none">
            <Icons.apple className="h-8 w-8 text-black" />
          </div>
        </div>
        <div className="text-center font-semibold text-slate-400">
          New to the site?
          <span className="text-blue-600 cursor-pointer active:text-purple-400 select-none">
            {" "}
            Register
          </span>
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

export default Logincard;
