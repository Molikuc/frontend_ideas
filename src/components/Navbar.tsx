import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-zinc-100 h-fit border-b py-2 z-10">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/">
          <div className="my-[1.3331rem]">Home Page</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
