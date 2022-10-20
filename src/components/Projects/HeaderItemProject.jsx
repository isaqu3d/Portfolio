import { Badge, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Paragraph } from "../Paragraph";
import Title from "./Title";

export default function HeaderItemProject({ title, badgeYear, description }) {
  return (
    <>
      <Title>
        {title}

        <Badge
          ml={2}
          color={useColorModeValue("whiteAlpha.800", "whiteAlpha.700")}
          bg={useColorModeValue("teal.600", "gray.300")}
        >
          {badgeYear}
        </Badge>
      </Title>

      <Paragraph>{description}</Paragraph>
    </>
  );
}
