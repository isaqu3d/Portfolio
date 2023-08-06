"use client";

import BadgeTitle from "@components/Projects/BadgeTitle";
import useThemeData from "@hook/useThemeData";
import Link from "next/link";

type ListItemProjectProps = {
  url: string;
  urlGitHub: string;
  target?: string;
  description: string;
};

export const ProjectDescription = ({
  url,
  urlGitHub,
  description,
  target,
}: ListItemProjectProps) => {
  const { theme } = useThemeData();

  const LinkWebsite = () => {
    return (
      <Link
        href={url}
        className={`${
          theme
            ? "text-teal-600 hover:underline"
            : "text-pink-500 hover:underline"
        }`}
        target={target}
      >
        {url}
      </Link>
    );
  };

  const LinkGithub = () => {
    return (
      <Link
        href={urlGitHub}
        className={`${
          theme
            ? "text-teal-600 hover:underline"
            : "text-pink-500 hover:underline"
        }`}
        target={target}
      >
        {urlGitHub}
      </Link>
    );
  };

  return (
    <ul className="my-4 ml-4">
      <div>
        <BadgeTitle>Website</BadgeTitle>

        <LinkWebsite />
      </div>

      <li>
        <BadgeTitle>GitHub</BadgeTitle>
        <LinkGithub />
      </li>

      <li>
        <BadgeTitle>Tech</BadgeTitle>
        <span>{description}</span>
      </li>
    </ul>
  );
};
