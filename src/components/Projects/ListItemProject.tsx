import BadgeTitle from "@components/Projects/BadgeTitle";
import useThemeData from "@hook/useThemeData";

type ListItemProjectProps = {
  url: string;
  urlGitHub: string;
  target: string;
  description: string;
};

export const ListItemProject = ({
  url,
  urlGitHub,
  target,
  description,
}: ListItemProjectProps) => {
  const { theme } = useThemeData();
  return (
    <ul className="my-4 ml-4">
      <div>
        <BadgeTitle>Website</BadgeTitle>

        <a
          href={url}
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
          href={urlGitHub}
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
