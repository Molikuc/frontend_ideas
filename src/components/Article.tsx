"use client";

import { Bell, Heart, Home, LayoutGrid, Menu, Settings } from "lucide-react";
import { IoBatteryFullOutline } from "react-icons/io5";
import { MdSignalCellularAlt, MdWifi } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Article = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [index, setIndex] = useState(0);

  const headlines = [
    "https://picsum.photos/id/13/400/300",
    "https://picsum.photos/id/17/400/300",
    "https://picsum.photos/id/29/400/300",
    "https://picsum.photos/id/48/400/300",
    "https://picsum.photos/id/480/400/300",
  ];

  const headlines1 = [
    {
      label: "Breaking news",
      desc: "This is an amazing breaking news",
    },
    {
      label: "ENVIRONMENT",
      desc: "This is another amzing  news about a lot of things I'm sure you're gonna like it",
    },
    {
      label: "One Breaking",
      desc: "No news on this one, just a photo",
    },
    {
      label: "Shocking News",
      desc: "I don't know what to write anymore but I will try to make it long",
    },
    {
      label: "Breaking news",
      desc: "You came all that way to here, welcome, take a set, enjoy",
    },
  ];

  const shortStories = [
    { id: 1, image: "https://picsum.photos/id/13/200/300", label: "Beach" },
    { id: 2, image: "https://picsum.photos/id/17/200/300", label: "Path" },
    { id: 3, image: "https://picsum.photos/id/29/200/300", label: "Mountain" },
    { id: 4, image: "https://picsum.photos/id/48/200/300", label: "Work" },
    { id: 5, image: "https://picsum.photos/id/49/200/300", label: "Travel" },
    { id: 6, image: "https://picsum.photos/id/63/200/300", label: "Coffee" },
  ];

  const articles = [
    {
      id: 1,
      image: "https://picsum.photos/id/442/200",
      category: "WORLD",
      title: "King Charles III’s image to appear on Australian coins this year",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/82/200",
      category: "FOOD",
      title: "Japanese festival in London promotes seafood from Japan",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/837/200",
      category: "SCI & TECH",
      title: "Gunma selects 2 experts for project to sniff out diseases",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/364/200",
      category: "TRAVEL",
      title: "A last stop taste of Japan for passengers flying out of Narita",
    },
    {
      id: 5,
      image: "https://picsum.photos/id/804/200",
      category: "HEALTH",
      title: "Health ministry urges 6 or more hours of sleep for adults",
    },
  ];

  const handleIconClick = (iconName: any) => {
    setActiveIcon(iconName);
  };

  const nextStep = () => {
    if (index === headlines.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  const prevStep = () => {
    if (index === 0) {
      return setIndex(headlines.length - 1);
    }
    setIndex(index - 1);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  return (
    <div className="h-full flex flex-col items-center ">
      <div className="text-4xl mb-5">Shopping List</div>
      <div className="h-[844px] w-[390px] bg-slate-100 rounded-2xl shadow-2xl flex flex-col gap-2 px-3 sm:p-0 relative">
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
        <div className="flex justify-between mx-[0.5rem] sm:mx-[1.3331rem]">
          <Menu className="cursor-pointer" />
          <Bell className="cursor-pointer" />
        </div>
        <div className="text-2xl mt-[1.3331rem] mx-[1.3331rem]">
          Headline Stories
        </div>
        <div className="h-[30%] mx-[1.3331rem] rounded-lg">
          <AnimatePresence>
            <motion.div
              className="cursor-grab overflow-hidden h-full rounded-lg relative"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div className="flex">
                <motion.div
                  key={Math.random()}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="min-h-[300px]min-w-[400px]"
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      nextStep();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevStep();
                    }
                  }}
                >
                  <Image
                    src={headlines[index]}
                    alt="test"
                    width={400}
                    height={300}
                    className="pointer-events-none h-full brightness-50"
                  />
                  <div className="absolute top-4 right-0 bg-red-600 rounded-full px-2 text-white mr-[1.3331rem]">
                    <h2>{headlines1[index].label}</h2>
                  </div>
                  <div className="absolute bottom-0 text-white mb-[1.3331rem] mx-[1.3331rem] font-bold">
                    {headlines1[index].desc}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="my-[1.3331rem] mx-[0.5rem] sm:mx-[1.3331rem]">
          <div className="text-xl mb-[0.6669rem]">Short Stories</div>
          <div className="flex gap-3 overflow-x-scroll no-scrollbar">
            {shortStories.map((story) => (
              <Avatar key={story.id} className="h-16 w-16">
                <AvatarImage src={story.image} />
                <AvatarFallback>{story.label}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
        <div className=" mx-[0.5rem] sm:mx-[1.3331rem]">
          <div className="text-xl">Articles</div>
          <div className="flex flex-col h-[200px] overflow-y-scroll no-scrollbar">
            {articles.map((article) => (
              <div key={article.id} className="flex gap-2 my-[1.3331rem] ">
                <Image
                  src={article.image}
                  width={100}
                  height={100}
                  alt={article.title}
                  className="rounded-lg"
                />
                <div className="flex flex-col mt-[0.2rem]">
                  <div className="text-[#CF1717] font-bold text-xs">
                    {article.category}
                  </div>
                  <div className="font-bold text-sm">{article.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bg-slate-100 left-0 bottom-0 flex justify-around items-center py-8 h-8 w-[390px] rounded-b-2xl">
          <Home
            className={`cursor-pointer ${
              activeIcon === "home" ? " text-[#0A3FC2]" : ""
            }`}
            onClick={() => handleIconClick("home")}
          />
          <LayoutGrid
            className={`cursor-pointer ${
              activeIcon === "layout" ? " text-[#0A3FC2]" : ""
            }`}
            onClick={() => handleIconClick("layout")}
          />
          <Heart
            className={`cursor-pointer ${
              activeIcon === "heart" ? " text-[#0A3FC2]" : ""
            }`}
            onClick={() => handleIconClick("heart")}
          />
          <Settings
            className={`cursor-pointer ${
              activeIcon === "settings" ? " text-[#0A3FC2]" : ""
            }`}
            onClick={() => handleIconClick("settings")}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
