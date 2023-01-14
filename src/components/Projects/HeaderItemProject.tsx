import useThemeData from "../../hook/useThemeData";
import { Paragraph } from "../Paragraph";
import Title from "./Title";

export default function HeaderItemProject({ title, badgeYear, description }) {
  const { theme } = useThemeData();
  return (
    <>
      <Title className="flex items-center">
        {title}
        <span
          className={`${
            theme ? "bg-teal-600 text-white-100" : "bg-gray-300 text-white-100"
          } ml-2 text-xs px-1`}
        >
          {badgeYear}
        </span>
      </Title>

      <Paragraph>{description}</Paragraph>
    </>
  );
}
