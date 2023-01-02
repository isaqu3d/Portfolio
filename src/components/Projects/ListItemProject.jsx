import useThemeData from "../../hook/useThemeData";
import BadgeTitle from "./BadgeTitle";

export const ListItemProject = ({
  hrefGitHub,
  href,
  url,
  urlGitHub,
  target,
  description,
}) => {
  const { theme } = useThemeData();
  return (
    <ul className="ml-4 my-4">
      <div>
        <BadgeTitle>Website</BadgeTitle>

        <a
          href={href}
          target={target}
          className={`${
            theme
              ? "text-teal-600 hover:underline"
              : "text-pink-500 hover:underline"
          }`}
        >
          {url}
        </a>
      </div>

      <li>
        <BadgeTitle>GitHub</BadgeTitle>
        <a
          href={hrefGitHub}
          target={target}
          className={`${
            theme
              ? "text-teal-600 hover:underline"
              : "text-pink-500 hover:underline"
          }`}
        >
          {urlGitHub}
        </a>
      </li>

      <li>
        <BadgeTitle>Tech</BadgeTitle>
        <span>{description}</span>
      </li>
    </ul>
  );
};
