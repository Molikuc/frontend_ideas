import { X } from "lucide-react";

const Popupcard = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5 mb-10">Pop up Card</div>
      <div className="h-[29rem] w-[17rem] bg-slate-700 rounded-3xl shadow-xl text-white  font-bold">
        <div className="flex justify-end mr-8 mt-3 cursor-pointer select-none active:text-zinc-300">
          <X className="h-8 w-8" />
        </div>
        <div className="text-2xl text-center mt-5 mb-10 mx-5">
          Are you sure you accept the settings?
        </div>

        <div className="text-center text-slate-300 my-8 mx-10 font-semibold">
          Clicking agree will make permanent changes, with cancel you can
          decline.
        </div>

        <div className="bg-white rounded-xl p-3 text-center text-black font-bold mx-5 mb-3 cursor-pointer shadow-lg select-none active:bg-zinc-300">
          Agree
        </div>
        <div className="bg-red-600 rounded-xl p-3 text-center text-black font-bold mx-5 mb-3 cursor-pointer shadow-lg select-none active:bg-red-700">
          Cancel
        </div>
      </div>
    </div>
  );
};

export default Popupcard;
