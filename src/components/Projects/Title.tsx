import NextLink from "next/link";
import { BiChevronRight } from "react-icons/bi";
import useThemeData from "../../hook/useThemeData";
import { Heading } from "../Heading";

type TitleProps = {
  children: any;
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
        <Heading className="inline-flex items-center text-xl mb-4 no-underline">
          {children}
        </Heading>
      </div>
    </>
  );
}
