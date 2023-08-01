import "../styles/global.css";

import Layout from "@components/Layout";
import { Scroll } from "@components/Scroll";
import { ThemeProvider } from "@context/ThemeContext";
import { ReactNode } from "react";

import { Metadata } from "next";
import Head from "./head";

export const metadata: Metadata = {
  title: {
    default: "Home | Isaque de Sousa",
    template: "%s | Isaque de Sousa",
  },
  description:
    "Seja bem-vindo ao meu portfolio, Sou Isaque de Sousa e venha me conhecer melhor.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Scroll>
        <ThemeProvider>
          <html lang="pt-br">
            <body>
              <Head />
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
