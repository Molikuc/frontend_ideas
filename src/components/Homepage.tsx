import Link from "next/link";
import Image from "next/image";
import Productcard from "../images/ProductCard.png";
import MusicPlayer from "../images/MusicPlayer.png";
import Login from "../images/Login.png";
import Signup from "../images/Signup.png";
import Popup from "../images/Popup.png";
import Calendar from "../images/Calendar.png";
import CreditCard from "../images/CreditCard.png";

export default function Home() {
  return (
    <div className="grid grid-cols-3 m-[2.6669rem] gap-8">
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/productcard"
      >
        <div className="h-[10rem] mb-8 min-w-[10rem]">
          <Image
            src={Productcard}
            alt="Product Card"
            className="object-contain h-full object-center "
          />
        </div>
        <div className="text-2xl">Product Card</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/playercard"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={MusicPlayer}
            alt="Music Player"
            className="object-cover h-full object-[50%_50%]"
          />
        </div>
        <div className="text-2xl">Music Player Card</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/logincard"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={Login}
            alt="Login Card"
            className="object-cover h-full object-[50%_50%]"
          />
        </div>
        <div className="text-2xl">Login Card</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/signupcard"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={Signup}
            alt="Sign Up Card"
            className="object-cover h-full object-[50%_50%]"
          />
        </div>
        <div className="text-2xl">Sign Up Card</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/popupcard"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={Popup}
            alt="Popup Card"
            className="object-cover h-full object-[50%_70%]"
          />
        </div>
        <div className="text-2xl">Pop up Card</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/calendar"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={Calendar}
            alt="Calendar"
            className="object-cover h-full object-[50%_70%]"
          />
        </div>
        <div className="text-2xl">Calendar</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/creditcard"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={CreditCard}
            alt="Credit Card"
            className="object-contain h-full object-center "
          />
        </div>
        <div className="text-2xl">Credit Card</div>
      </Link>
    </div>
  );
}
