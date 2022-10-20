import { Link, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import BadgeTitle from "./BadgeTitle";

export const ListItemProject = ({
  hrefGitHub,
  href,
  url,
  urlGitHub,
  target,
  description,
}) => {
  return (
    <List ml={4} my={4}>
      <ListItem>
        <BadgeTitle>Website</BadgeTitle>

        <Link
          href={href}
          target={target}
          color={useColorModeValue("teal.500", "pink.300")}
        >
          {url}
        </Link>
      </ListItem>

      <ListItem>
        <BadgeTitle>GitHub</BadgeTitle>
        <Link
          href={hrefGitHub}
          target={target}
          color={useColorModeValue("teal.500", "pink.300")}
        >
          {urlGitHub}
        </Link>
      </ListItem>

      <ListItem>
        <BadgeTitle>Tech</BadgeTitle>
        <span>{description}</span>
      </ListItem>
    </List>
  );
};
