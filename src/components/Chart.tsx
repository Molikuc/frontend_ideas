"use client";

import { data } from "@/data/chartData";
import { day } from "@/data/chartData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { useState } from "react";

const Chart = () => {
  const [chart, setChart] = useState("month");

  return (
    <div className="h-full flex flex-col items-center ">
      <div className="text-4xl mb-5">Chart</div>
      <div className="my-8 text-center">
        This is a test of Recharts to make chart with React here is a link :{" "}
        <a
          href="https://recharts.org/"
          target="_blank"
          className="text-xl text-purple-600"
        >
          Recharts.org
        </a>
      </div>
      <div className="flex gap-2 mb-8">
        <div
          className="cursor-pointer bg-red-600 text-white p-2 rounded-lg active:bg-red-500"
          onClick={() => setChart("month")}
        >
          Month
        </div>
        <div
          className="cursor-pointer bg-red-600 text-white p-2 rounded-lg active:bg-red-500"
          onClick={() => setChart("day")}
        >
          Day
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        {chart === "month" ? (
          <ResponsiveContainer width="90%" height={350}>
            <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                padding={{ bottom: 10 }}
              />
              <Tooltip />
              <CartesianGrid vertical={false} />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#dc1818"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="90%" height={350}>
            <LineChart
              width={730}
              height={250}
              data={day}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                padding={{ bottom: 10 }}
              />
              <Tooltip />
              <CartesianGrid vertical={false} />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#dc1818"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
        {chart === "month" ? (
          <ResponsiveContainer width="90%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip itemStyle={{ color: "red" }} />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="90%" height={350}>
            <BarChart data={day}>
              <XAxis
                dataKey="name"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip itemStyle={{ color: "red" }} />
              <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Chart;
