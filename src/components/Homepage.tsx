import Link from "next/link";
import Image from "next/image";
import items from "../data/homeItems.json";

export default async function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-[2.6669rem] gap-8">
      {items.map((item) => (
        <Link
          key={item.id}
          className=" bg-zinc-100 p-[2.6669rem] text-center rounded-lg shadow-lg min-w-[15rem]"
          href={item.href}
        >
          <div className="h-[10rem] mb-8">
            <Image
              src={item.image}
              width={500}
              height={500}
              alt={item.label}
              className={item.classPhoto}
            />
          </div>
          <div className="text-2xl">{item.label}</div>
        </Link>
      ))}
    </div>
  );
}
