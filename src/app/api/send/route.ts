import { EmailTemplate } from "@/features/email/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!request.body) {
      throw new Error("Request body is empty");
    }

    const { name, message, email } = await request.json();

    if (!name || !message || !email) {
      throw new Error("Missing required fields");
    }

    const data = await resend.emails.send({
      from: `${process.env.RESEND_FROM_EMAIL}`,
      to: ["isaque.error404@gmail.com"],
      subject: `Mensagem de ${name}!`,
      react: EmailTemplate({ email, message, name }),
    });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
