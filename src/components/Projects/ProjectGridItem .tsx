"use client";

import useThemeData from "@hook/useThemeData";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";

import { Metadata } from "next";

async function getSlug(slug: string) {
  const getSlug = `projects/${slug}`;
  return getSlug;
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params?.slug,
  };
}

type ProjectGridItemProps = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  url: string;
  alt: string;
};

export function ProjectGridItem({
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
        <NextLink href={`/projects/${url}`} passHref scroll>
          <div>
            <Image src={thumbnail} alt={alt} />

            <p
              className={`${
                theme ? "text-teal-600" : "text-pink-500"
              } mt-2 text-xl`}
            >
              {title}
            </p>

            <p className={`${theme ? "text-black" : "text-white-100"} text-sm`}>
              {description}
            </p>
          </div>
        </NextLink>
      </div>
    </>
  );
}
