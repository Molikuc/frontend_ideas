import { Bell, Heart, Home, LayoutGrid, Menu, Settings } from "lucide-react";
import { IoBatteryFullOutline } from "react-icons/io5";
import { MdSignalCellularAlt, MdWifi } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import Image from "next/image";

const Article = () => {
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
      image: "https://picsum.photos/id/1/200",
      category: "Category",
      title: "Title",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1/200",
      category: "Category",
      title: "Title",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1/200",
      category: "Category",
      title: "Title",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/1/200",
      category: "Category",
      title: "Title",
    },
  ];

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
        <div className="flex justify-between mx-[1.3331rem]">
          <Menu />
          <Bell />
        </div>
        <div className="text-2xl mx-[1.3331rem]">Headline Stories</div>
        <div className="h-[300px] bg-slate-500">
          {/* Image Slideshow with text on it. */}
        </div>
        <div className="my-[1.3331rem]">
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
        <div className="my-[1.3331rem]">
          <div className="text-xl">Articles</div>

          {articles.map((article) => (
            <div key={article.id} className="flex my-[1.3331rem]">
              <Image
                src={article.image}
                width={100}
                height={100}
                alt={article.title}
              />
              <div>
                <div>{article.category}</div>
                <div>{article.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bg-slate-100 left-0 bottom-0 flex justify-around mb-[1.3331rem] w-[390px]">
          <Home />
          <LayoutGrid />
          <Heart />
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default Article;
