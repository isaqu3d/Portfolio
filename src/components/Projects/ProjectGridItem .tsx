import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";

import useThemeData from "../../hook/useThemeData";

type ProjectGridItemProps = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  url: string;
  alt: string;
};

export default function ProjectGridItem({
  title,
  description,
  thumbnail,
  url,
  alt,
}: ProjectGridItemProps) {
  const { theme } = useThemeData();

  return (
    <>
      <div className="w-full text-center">
        <NextLink href={`/projects/${url}`} passHref scroll={false}>
          <div className="cursor-pointer">
            <Image src={thumbnail} alt={alt} />

            <a href={`/projects/${url}`}>
              <p
                className={`${
                  theme ? "text-teal-600" : "text-pink-500"
                } mt-2 text-xl`}
              >
                {title}
              </p>
            </a>

            <p className={`${theme ? "text-black" : "text-white-100"} text-sm`}>
              {description}
            </p>
          </div>
        </NextLink>
      </div>
    </>
  );
}
