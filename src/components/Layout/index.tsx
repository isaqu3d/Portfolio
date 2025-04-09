"use client";

import { Command } from "@/components/Command/Command";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-gray-900 text-white-100 dark:bg-gradient-to-br dark:from-primary dark:to-primary dark:text-black">
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
