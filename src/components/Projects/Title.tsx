import useThemeData from "@hook/useThemeData";
import NextLink from "next/link";
import { ReactNode } from "react";
import { BiChevronRight } from "react-icons/bi";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  const { theme } = useThemeData();

  return (
    <>
      <div className={className}>
        <NextLink href="/projects" passHref>
          <a
            className={`${
              theme
                ? "text-teal-600 hover:underline"
                : "text-pink-400 hover:underline"
            }`}
          >
            Projeto
          </a>
        </NextLink>
        <span>
          <BiChevronRight />
        </span>

        <h1 className="inline-flex items-center text-xl font-bold">
          {children}
        </h1>
      </div>
    </>
  );
}
