import "../../styles/global.css";

import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";

import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { getTranslations } from "@/lib/get-translations";

export const metadata: Metadata = {
  authors: [{ name: "Isaque de Sousa" }],
  category: "Developer",
  creator: "Isaque de Sousa",
  title: {
    default: "Home | Isaque de Sousa",
    template: "%s | Isaque de Sousa",
  },
  description:
    "Olá, sou Isaque! Sou um Desenvolvedor Front-end com paixão por transformar ideias em realidade digitais. Venho explorando, aprimorando e estudando cada vez mais esse fascinante mundo da tecnologia. Tenho aprimorado meus conhecimentos em tecnologias como: ReactJS, NextJS, TailwindCSS, TypeScript, Sanity, NestJS, PostgreSQL e Docker.",
  keywords: [
    "Isaque de Sousa",
    "Desenvolvedor Web",
    "Desenvolvedor Front-end",
    "Desenvolvedor FullStack",
    "Web Developer",
    "Front-end Developer",
    "FullStack Developer",
    "Brazil",
    "Next.js",
  ],
  openGraph: {
    title: "Home | Isaque de Sousa",
    description:
      "Olá, sou Isaque! Sou um Desenvolvedor Front-end com paixão por transformar ideias em realidade digitais. Venho explorando, aprimorando e estudando cada vez mais esse fascinante mundo da tecnologia. Tenho aprimorado meus conhecimentos em tecnologias como: ReactJS, NextJS, TailwindCSS, TypeScript, Sanity, NestJS, PostgreSQL e Docker.",
    url: "https://isaqu3d.vercel.app/",
    siteName: "Isaque de Sousa",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getTranslations(locale);

  if (!messages) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Toaster richColors />
          <Layout>
            <NextIntlClientProvider>
              <main>{children}</main>
            </NextIntlClientProvider>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
