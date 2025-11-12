import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export function EmailTemplate({ email, message, name }: EmailTemplateProps) {
  const previewText = name;
  return (
    <Html>
      <Head />
      <Preview>
        {name}, {previewText}
      </Preview>
      <Tailwind>
        <Body>
          <Container className="mx-auto my-[40px] w-[500px] rounded-lg bg-zinc-800 p-[20px]">
            <Heading className="m-0 my-[26px] p-0 text-center text-[24px] font-normal leading-[24px] text-slate-50 ">
              Mensagem de{" "}
              <strong className="text-teal-300 underline">{name}</strong>
            </Heading>

            <Text className="text-[14px] leading-[24px] text-slate-50">
              {message}
            </Text>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Esta mensagem foi destinada a{" "}
              <span className="text-slate-50">você</span> por{" "}
              <span className="text-slate-50">{email}</span>.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
