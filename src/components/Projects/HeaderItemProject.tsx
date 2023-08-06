"use client";

import { Paragraph } from "@components/Paragraph";
import Title from "@components/Projects/Title";
import useThemeData from "@hook/useThemeData";

export default function HeaderItemProject({ title, badgeYear, description }) {
  const { theme } = useThemeData();

  return (
    <>
      <Title className="flex items-center">
        {title}
        <span
          className={`${
            theme ? "bg-teal-600 text-white-100" : "bg-gray-300 text-white-100"
          } ml-2 px-1 text-xs`}
        >
          {badgeYear}
        </span>
      </Title>

      <Paragraph>{description}</Paragraph>
    </>
  );
}
