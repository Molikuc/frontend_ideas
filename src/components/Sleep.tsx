"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { month, week } from "@/data/sleepData";
import { MdSignalCellularAlt, MdWifi } from "react-icons/md";
import { IoBatteryFullOutline } from "react-icons/io5";
import {
  AlarmClock,
  BarChart3,
  ChevronLeft,
  Home,
  MoreHorizontal,
  User2,
} from "lucide-react";
import { useEffect, useState } from "react";

const Sleep = () => {
  const [randomNumber, setRandomNumber] = useState<any>(null);
  const [activeIcon, setActiveIcon] = useState(null);
  const [chart, setChart] = useState("week");

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100));
  }, []);

  const circumference = 2 * Math.PI * 45;
  const dashoffset = circumference * (1 - randomNumber / 100);

  const handleIconClick = (iconName: any) => {
    setActiveIcon(iconName);
  };

  const CustomLabel = (props: any) => {
    const { x, y, value } = props;

    return (
      <text x={x} y={y} fontSize={10} fill="white" dy={15} dx={2}>
        {value}
      </text>
    );
  };

  return (
    <div className="h-full flex flex-col items-center ">
      <div className="text-4xl mb-5">Sleep Panel</div>
      <div className="h-[844px] w-[390px] bg-slate-100 rounded-2xl shadow-2xl mb-10 flex flex-col gap-2 px-3 sm:p-0 relative">
        <div className="flex justify-between mb-[1.3331rem]">
          <div className="ml-4 mt-2">11:30</div>
          <div className="flex mr-3 mt-2 gap-1 text-lg">
            <MdSignalCellularAlt />
            <MdWifi />
            <div>
              <IoBatteryFullOutline />
            </div>
          </div>
        </div>
        <div className="flex justify-between sm:mx-[1.3331rem]">
          <ChevronLeft />
          <div>Sleep Analysis</div>
          <MoreHorizontal />
        </div>
        <div className="flex justify-around my-[1.3331rem]">
          <div
            className="border border-slate-300 bg-indigo-100 text-indigo-900 px-4 py-1 rounded-lg cursor-pointer select-none"
            onClick={() => setChart("week")}
          >
            Weekly
          </div>
          <div
            className="border border-slate-400 bg-indigo-100 text-indigo-800 px-4 py-1 rounded-lg cursor-pointer select-none"
            onClick={() => setChart("month")}
          >
            Monthly
          </div>
        </div>
        <div className="border border-slate-300 rounded-lg p-2 sm:mx-[1.3331rem]">
          <div>Average</div>
          <div className="flex items-end">
            <div className="text-3xl text-indigo-500 font-bold">
              {randomNumber}
            </div>
            <div>&nbsp;sleep quality</div>
          </div>
        </div>
        {chart === "week" ? (
          <ResponsiveContainer
            width="90%"
            height={250}
            className="my-[1.3331rem]"
          >
            <BarChart data={week}>
              <XAxis
                dataKey="name"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                fontSize={12}
                tickLine={false}
                axisLine={false}
                ticks={[0, 50, 100]}
              />
              <CartesianGrid vertical={false} strokeDasharray={4} />
              <Bar dataKey="total" fill="#5F4AEE" radius={[4, 4, 0, 0]}>
                <LabelList
                  dataKey="total"
                  position="insideTop"
                  offset={10}
                  fill="white"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer
            width="90%"
            height={250}
            className="my-[1.3331rem]"
          >
            <BarChart data={month}>
              <XAxis
                dataKey="name"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                fontSize={12}
                tickLine={false}
                axisLine={false}
                ticks={[0, 50, 100]}
              />
              <CartesianGrid vertical={false} strokeDasharray={4} />
              <Bar dataKey="total" fill="#5F4AEE" radius={[4, 4, 0, 0]}>
                <LabelList
                  dataKey="total"
                  position="insideTop"
                  offset={10}
                  fill="white"
                  content={<CustomLabel />}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
        <div className="border border-slate-300 rounded-lg p-2 sm:mx-[1.3331rem]">
          <div className="mb-[1.3331rem]">Sleep details</div>
          <div className="flex">
            <div className="w-[50%] h-[50%] flex flex-col items-center">
              <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="55"
                  cy="55"
                  r="45"
                  fill="transparent"
                  stroke="#5F4AEE"
                  strokeWidth="10"
                  strokeDasharray={`${circumference} ${circumference}`}
                  strokeDashoffset={dashoffset}
                  stroke-linecap="round"
                  transform="rotate(-90, 55, 55)"
                />
                <text
                  x="55"
                  y="55"
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="20"
                  fill="#5F4AEE"
                  font-weight="bold"
                >
                  {randomNumber}
                </text>
              </svg>
              <div>Average</div>
            </div>
            <div className="w-[50%] h-[50%] ml-[1.3331rem] flex flex-col items-center">
              <svg width="110" height="110" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="55"
                  cy="55"
                  r="45"
                  fill="transparent"
                  stroke="#5F4AEE"
                  strokeWidth="10"
                  strokeDasharray={`${circumference} ${circumference}`}
                  strokeDashoffset={circumference * (1 - 70 / 100)}
                  stroke-linecap="round"
                  transform="rotate(-90, 55, 55)"
                />
                <text
                  x="55"
                  y="55"
                  textAnchor="middle"
                  dy=".3em"
                  fontSize="20"
                  fill="#5F4AEE"
                  font-weight="bold"
                >
                  70
                </text>
              </svg>
              <div className="text-center">Another Value</div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute bg-slate-100 left-0 bottom-0 flex justify-around items-center py-8 h-8 w-[390px] rounded-b-2xl">
            <Home
              className={`cursor-pointer ${
                activeIcon === "home" ? " text-[#5F4AEE]" : ""
              }`}
              onClick={() => handleIconClick("home")}
            />
            <AlarmClock
              className={`cursor-pointer ${
                activeIcon === "layout" ? " text-[#5F4AEE]" : ""
              }`}
              onClick={() => handleIconClick("layout")}
            />
            <BarChart3
              className={`cursor-pointer ${
                activeIcon === "heart" ? " text-[#5F4AEE]" : ""
              }`}
              onClick={() => handleIconClick("heart")}
            />
            <User2
              className={`cursor-pointer ${
                activeIcon === "settings" ? " text-[#5F4AEE]" : ""
              }`}
              onClick={() => handleIconClick("settings")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleep;
