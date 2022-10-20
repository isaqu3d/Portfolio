import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const P = styled(Text)`
  text-align: justify;
  text-indent: 1em;
`;

export function Paragraph({ children }) {
  return <P>{children}</P>;
}
