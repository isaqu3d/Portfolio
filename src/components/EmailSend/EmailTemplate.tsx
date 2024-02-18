import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Tailwind>
      <Body>
        <Container className="mx-auto my-[40px] w-[500px] rounded-lg border border-solid border-[#eaeaea] bg-zinc-800 p-[20px]">
          <Heading className="m-0 my-[26px] p-0 text-center text-[24px] font-normal leading-[24px] text-black">
            Mensagem de{" "}
            <strong className="text-teal-300 underline">{name}</strong>
          </Heading>

          <Text className="text-[14px] leading-[24px] text-zinc-50">
            {message}
          </Text>

          <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

          <Text className="text-[12px] leading-[24px] text-[#666666]">
            Esta mensagem foi destinada a{" "}
            <span className="text-zinc-200">você</span> por{" "}
            <span className="text-zinc-200">{email}</span>.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
