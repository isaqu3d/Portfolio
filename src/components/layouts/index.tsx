"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <div className="bg-gradient-to-r from-neutral-900 to-gray-900 text-white-100 dark:bg-gradient-to-br dark:from-primary dark:to-primary dark:text-black">
      <Navbar locale={locale} />

      <main className="flex min-h-screen justify-center pt-[100px]">
        {children}
      </main>

      <Footer />
    </div>
  );
}
