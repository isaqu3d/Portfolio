import { z } from "zod";

export const SubmitMessageSchema = z.object({
  name: z
    .string({
      required_error: "Digite seu nome",
    })
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .max(20)
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),

  email: z
    .string({
      required_error: "E-mail é obrigatório",
    })
    .email("Formato de e-mail inválido")
    .toLowerCase(),

  message: z
    .string({
      required_error: "Digite sua mensagem",
    })
    .min(10, "A mensagem precisa ter 10 caracteres")
    .max(300),
});

export type SubmitMessageData = z.infer<typeof SubmitMessageSchema>;
