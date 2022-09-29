import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

export default function Bio() {
  return (
    <>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>2002</BioYear>
        Nasci em Fortaleza - CE, Brasil.
      </BioSection>

      <BioSection>
        <BioYear>2020</BioYear>
        Comecei a conhecer a área de programação e me apaixonando pela área
      </BioSection>

      <BioSection>
        <BioYear>2022</BioYear>
        Comecei a estudar focado e agora faço parte do time de
        <span> &quot;Dev Voluntário&quot; </span>
        na Tech Pro Bem
      </BioSection>
    </>
  );
}
