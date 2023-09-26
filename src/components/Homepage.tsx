import Link from "next/link";
import Image from "next/image";
import productcard from "../images/ProductCard.png";
import musicPlayer from "../images/MusicPlayer.png";
import login from "../images/Login.png";
import signup from "../images/Signup.png";
import popup from "../images/Popup.png";
import calendar from "../images/Calendar.png";
import creditCard from "../images/CreditCard.png";

export default function Home() {
  return (
    <div className="grid grid-cols-3 m-[2.6669rem] gap-8">
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/productcard"
      >
        <div className="h-[10rem] mb-8 min-w-[10rem]">
          <Image
            src={productcard}
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
            src={musicPlayer}
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
            src={login}
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
            src={signup}
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
            src={popup}
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
            src={calendar}
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
            src={creditCard}
            alt="Credit Card"
            className="object-contain h-full object-center "
          />
        </div>
        <div className="text-2xl">Credit Card</div>
      </Link>
    </div>
  );
}
