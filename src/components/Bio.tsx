import { Heading } from "@/components/Heading";
import { ReactNode } from "react";

export const BioSectionTwo = ({ children }: { children: ReactNode }) => {
  return <div className="pl-14 -indent-14">{children}</div>;
};

export const BioYearTwo = ({ children }: { children: ReactNode }) => {
  return <span className="mr-4 font-bold">{children}</span>;
};

export default function Bio() {
  return (
    <>
      <Heading>Bio</Heading>
      <BioSectionTwo>
        <BioYearTwo>2002</BioYearTwo> Nasci em Fortaleza - CE, Brasil.
      </BioSectionTwo>

      <BioSectionTwo>
        <BioYearTwo>2020</BioYearTwo> Comecei a conhecer a área de programação e
        cada vez mais estou me apaixonando pela área.
      </BioSectionTwo>

      <BioSectionTwo>
        <BioYearTwo>2022</BioYearTwo> Comecei a estudar focado e fiz parte do
        time de &quot;Dev Voluntário&quot; na Tech Pro Bem.
      </BioSectionTwo>
    </>
  );
}
