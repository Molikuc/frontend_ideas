import Image from "next/image";
import { IoBatteryFullOutline } from "react-icons/io5";
import { MdSignalCellularAlt, MdWifi } from "react-icons/md";
import ph1 from "@/images/ph-1.jpg";
import {
  Globe,
  PenSquare,
  Mail,
  Phone,
  Lock,
  ChevronRight,
} from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-4xl mb-5">Signup Card for Phone</div>
      <div className="h-[844px] w-[390px] bg-slate-100 rounded-2xl shadow-2xl flex flex-col">
        <div className="h-[150px] w-full rounded-t-2xl bg-slate-500 relative">
          <div className="flex justify-between text-white">
            <div className="ml-4 mt-2">11:31</div>
            <div className="flex mr-3 mt-2 gap-1 text-lg ">
              <MdSignalCellularAlt />
              <MdWifi />
              <div>
                <IoBatteryFullOutline />
              </div>
            </div>
          </div>
          <div className="absolute top-[65%] left-[35%]">
            <div className="relative w-full h-full">
              <Image
                src={ph1}
                alt="profile picture"
                className="rounded-full h-28 w-28 object-none object-[49%_20%]"
              />
              <div className="absolute left-[70%] top-[65%]">
                <div className="bg-zinc-200 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer active:bg-zinc-300 select-none">
                  <PenSquare className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mx-8 mt-20">
          <div className="text-center">
            <div className="text-2xl font-bold">Harry Park</div>
            <div className="opacity-90">Musician</div>
          </div>
          <div className="flex flex-col gap-[1.3331rem]">
            <div className="flex flex-col gap-2">
              <div className="flex opacity-80 gap-3">
                <Globe />
                <div>Website</div>
              </div>
              <div className="border-2 border-slate-300 h-[2.6669rem] flex items-center justify-between rounded-md px-[0.6669rem] cursor-pointer active:bg-zinc-200">
                <div className="font-medium">harrypark.com</div>
                <ChevronRight />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex opacity-80 gap-3">
                <Mail />
                <div>Email Address</div>
              </div>
              <div className="border-2 border-slate-300 h-[2.6669rem] flex items-center justify-between rounded-md px-[0.6669rem] cursor-pointer active:bg-zinc-200">
                <div className="font-medium">harrypark@email.com</div>
                <ChevronRight />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex opacity-80 gap-3">
                <Phone />
                <div>Phone Number</div>
              </div>
              <div className="border-2 border-slate-300 h-[2.6669rem] flex items-center justify-between rounded-md px-[0.6669rem] cursor-pointer active:bg-zinc-200">
                <div className="font-medium">+1 1234-3213-1234</div>
                <ChevronRight />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex opacity-80 gap-3">
                <Lock />
                <div>Password</div>
              </div>
              <div className="border-2 border-slate-300 h-[2.6669rem] flex items-center justify-between rounded-md px-[0.6669rem] cursor-pointer active:bg-zinc-200">
                <div className="font-medium">Change Password</div>
                <ChevronRight />
              </div>
            </div>
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

export default ProfileCard;
