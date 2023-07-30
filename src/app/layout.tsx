"use client";

import "../styles/global.css";

import Layout from "@components/Layout";
import { Scroll } from "@components/Scroll";
import { ThemeProvider } from "@context/ThemeContext";
import { NextSeo } from "next-seo";
import { ReactNode } from "react";

import seo from "../../nextseo.config";

/* export const metadata: Metadata = {
  title: "title",
  description: "Welcome to Next.js",
}; */ // resolver isso do metadata com use client

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Scroll>
        <NextSeo {...seo} />
        <ThemeProvider>
          <html lang="pt-br">
            <body>
              <Layout>
                <main className="max-w-lg px-4">{children}</main>
              </Layout>
            </body>
          </html>
        </ThemeProvider>
      </Scroll>
    </>
  );
}
