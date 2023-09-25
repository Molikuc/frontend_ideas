"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Calendar = () => {
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  const hours = Array.from({ length: 11 }, (_, index) => index + 1);
  const purpleTextDays = [2, 3, 9, 10, 16, 17, 23, 24, 30];
  const [divText, setDivText] = useState("25");

  //@ts-ignore
  const handleDivClick = (e) => {
    const text = e?.target.textContent;
    setDivText(text);
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5 mb-10">Calendar</div>
      <div className="flex h-[30rem] min-w-[50rem] shadow-xl rounded-lg gap-5">
        <div className="mx-5 text-2xl">
          <div className="my-5">Good evening!</div>
          <div className="flex my-5 justify-between">
            <div className="text-lg">September 2023</div>
            <div className="flex">
              <div className="border-2 px-3">
                <ChevronLeft className="opacity-50" />
              </div>
              <div className="border-y-2 border-r-2 px-3">
                <ChevronRight className="opacity-50" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-5 text-center">
            <div className="text-purple-300">Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div className="text-purple-300">Sat</div>
            <div className="text-purple-300">27</div>
            <div className="opacity-40">28</div>
            <div className="opacity-40">29</div>
            <div className="opacity-40">30</div>
            <div className="opacity-40">31</div>
            {days.map((day) => (
              <div
                key={day}
                onClick={handleDivClick}
                className={`${
                  day === 25
                    ? "rounded-full bg-indigo-700 text-white p-2 w-10 h-10 flex items-center justify-center"
                    : purpleTextDays.includes(day)
                    ? "text-purple-400 flex items-center justify-center"
                    : ""
                } cursor-pointer`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[full] w-[45%] border-l-2">
          <div className="text-3xl h-14 bg-indigo-700 flex items-center pl-5 text-white mb-2">
            {divText ? <p>Sep {divText}</p> : "Chosen day"}
          </div>
          <div className="text-sm h-[85%] overflow-scroll no-scrollbar flex flex-col gap-2 ml-4">
            <div className="flex gap-2">
              <div className="w-[25%]">12 AM</div>
              <div className="h-[5rem] w-full border-t-2 mt-2 cursor-pointer"></div>
            </div>
            {hours.map((hour) => (
              <div key={hour} className="flex gap-2">
                <div className="w-[25%]">{hour} AM</div>
                <div className="h-[5rem] w-full border-t-2 mt-2 cursor-pointer"></div>
              </div>
            ))}
            <div className="flex gap-2">
              <div className="w-[25%]">12 PM</div>
              <div className="h-[5rem] w-full border-t-2 mt-2 cursor-pointer"></div>
            </div>
            {hours.map((hour) => (
              <div key={hour} className="flex gap-2">
                <div className="w-[25%]">{hour} PM</div>
                <div className="h-[5rem] w-full border-t-2 mt-2 cursor-pointer"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
