import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-[2.6669rem] gap-8">
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/productcard"
      >
        <div className="h-[10rem] mb-8 min-w-[10rem]">
          <Image
            src={"/thumbnail/ProductCard.png"}
            alt="Product Card"
            width={500}
            height={500}
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
            src={"/thumbnail/MusicPlayer.png"}
            width={500}
            height={500}
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
            src={"/thumbnail/Login.png"}
            width={500}
            height={500}
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
            src={"/thumbnail/Signup.png"}
            width={500}
            height={500}
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
            src={"/thumbnail/Popup.png"}
            width={500}
            height={500}
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
            src={"/thumbnail/Calendar.png"}
            width={500}
            height={500}
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
            src={"/thumbnail/CreditCard.png"}
            width={500}
            height={500}
            alt="Credit Card"
            className="object-contain h-full object-center "
          />
        </div>
        <div className="text-2xl">Credit Card</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/menu"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={"/thumbnail/Menu.png"}
            width={500}
            height={500}
            alt="Menu"
            className="object-contain h-full object-center "
          />
        </div>
        <div className="text-2xl">Menu Animation</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/profilecard"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={"/thumbnail/Profile.png"}
            width={500}
            height={500}
            alt="Profile Card"
            className="object-cover h-full object-[50%_40%] "
          />
        </div>
        <div className="text-2xl">Profile Card</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/verification"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={"/thumbnail/verification.png"}
            width={500}
            height={500}
            alt="Verification Card"
            className="object-cover h-full object-[50%_70%] "
          />
        </div>
        <div className="text-2xl">Verification Mobile</div>
      </Link>
      <Link
        className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
        href="/blog/location"
      >
        <div className="h-[10rem] mb-8">
          <Image
            src={"/thumbnail/Location.png"}
            width={500}
            height={500}
            alt="Location Mobile"
            className="object-cover h-full object-[50%_20%] "
          />
        </div>
        <div className="text-2xl">Location</div>
      </Link>
    </div>
  );
}
