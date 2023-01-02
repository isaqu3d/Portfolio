import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import useThemeData from "../../hook/useThemeData";
import { Heading } from "../Heading";

export default function Title({ children, className }) {
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
          <ChevronRightIcon />
        </span>
        <Heading className="inline-flex items-center text-xl mb-4 no-underline">
          {children}
        </Heading>
      </div>
    </>
  );
}
