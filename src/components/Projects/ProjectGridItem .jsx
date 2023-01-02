import Image from "next/image";
import NextLink from "next/link";
import useThemeData from "../../hook/useThemeData";

export default function ProjectGridItem({ children, id, title, thumbnail }) {
  const { theme } = useThemeData();
  return (
    <>
      <div className="w-full text-center">
        <NextLink href={`/projects/${id}`} passHref scroll={false}>
          <div className="cursor-pointer">
            <Image src={thumbnail} alt={title} />

            <a href={`/projects/${id}`}>
              <p
                className={`${
                  theme ? "text-teal-600" : "text-pink-500"
                } mt-2 text-xl`}
              >
                {title}
              </p>
            </a>
            <p className={`${theme ? "text-black" : "text-white-100"} text-sm`}>
              {children}
            </p>
          </div>
        </NextLink>
      </div>
    </>
  );
}
