import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/blog/productcard">Product Card</Link>
      <Link href="/blog/playercard">Player Card</Link>
      <Link href="/blog/logincard">Login Card</Link>
      <Link href="/blog/signupcard">Signup Card</Link>
      <Link href="/blog/popupcard">Pop up Card</Link>
      <Link href="/blog/calendar">Calendar</Link>
      <Link href="/blog/creditcard">Credit Card</Link>
    </div>
  );
}
