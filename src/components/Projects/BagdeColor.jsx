import { Badge } from "@chakra-ui/react";

export default function BadgeMeta({ children }) {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  );
}
