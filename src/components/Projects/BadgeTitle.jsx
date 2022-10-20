import { Badge } from "@chakra-ui/react";

export default function BadgeTitle({ children }) {
  return (
    <>
      <Badge colorScheme="green" mr={2}>
        {children}
      </Badge>
    </>
  );
}
