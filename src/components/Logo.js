import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { RiCodeSSlashLine } from "react-icons/ri";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  > svg {
    transition: 200ms ease;
  }
  &:hover > svg {
    transform: rotate(20deg);
  }
`;

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <RiCodeSSlashLine size={20} />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            ml={3}
            variant="page-title"
            as="h2"
          >
            Isaque de Sousa
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
}
