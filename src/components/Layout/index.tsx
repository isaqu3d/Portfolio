"use client";

import useThemeData from "@/hook/useThemeData";
import { Command } from "../Command/Command";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  const { theme } = useThemeData();

  return (
    <div className="bg-gray-900 text-white-100 dark:bg-white-100 dark:text-black">
      <Navbar />

      <main className="flex min-h-screen justify-center pt-[100px]">
        <div className="hidden lg:flex">
          <Command />
        </div>
        {children}
      </main>

      <Footer />
    </div>
  );
}
