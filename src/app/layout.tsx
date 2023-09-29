import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Ideas",
  description:
    "This site will be a hub/workshop of every frontend creation I will make",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="mx-8 min-h-screen pt-12 bg-slate-50 antialiased">
        <Navbar />
        <div className="mx-auto h-full pt-12">{children}</div>
      </body>
    </html>
  );
}
