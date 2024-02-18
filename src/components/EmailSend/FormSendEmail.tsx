import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const EmailFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z
    .string()
    .min(6, { message: "Message must be at least 6 characters." }),
});

type ContactFormInput = z.infer<typeof EmailFormSchema>;

export const FormSendEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(EmailFormSchema),
  });

  const sendEmail = async (formData: ContactFormInput) => {
    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
      }).then(() => {
        toast.success("E-mail enviado");
      });
    } catch (error) {
      toast.error("Erro ao enviar este e-mail!");
    }
  };

  return (
    <Form.Root onSubmit={handleSubmit(sendEmail)}>
      <div className="mx-auto my-4 flex flex-col gap-4">
        <div className="flex flex-1 items-center gap-4 sm:flex-col md:flex-row">
          <Form.Field name="text" className="w-full">
            <Form.Control asChild>
              <input
                className="text-primary/60 w-full appearance-none rounded-lg border border-[#262626] bg-[#171717] p-3 text-sm outline-none transition duration-300 placeholder:text-neutral-500 focus:ring-1 focus:ring-[#262626] data-[invalid]:border-red-500 dark:border-zinc-400 dark:bg-[#e5e5e5] dark:focus:ring-1 dark:focus:ring-zinc-400"
                type="text"
                autoComplete="off"
                required
                placeholder="Nome"
                {...register("name")}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field name="question" className="w-full">
            <Form.Control asChild>
              <input
                className="text-primary/60 w-full appearance-none rounded-lg border border-[#262626] bg-[#171717] p-3 text-sm outline-none transition duration-300 placeholder:text-neutral-500 focus:ring-1 focus:ring-[#262626] data-[invalid]:border-red-500 dark:border-zinc-400 dark:bg-[#e5e5e5] dark:focus:ring-1 dark:focus:ring-zinc-400"
                type="email"
                autoComplete="off"
                required
                placeholder="Email"
                {...register("email")}
              />
            </Form.Control>
          </Form.Field>
        </div>

        <Form.Field name="question">
          <Form.Control asChild>
            <textarea
              className="w-7xl text-primary/60 h-44 w-full resize-none appearance-none  rounded-lg border border-[#262626] bg-[#171717] p-3 text-sm outline-none transition duration-300 placeholder:text-neutral-500 focus:ring-1 focus:ring-[#262626] data-[invalid]:border-red-500 dark:border-zinc-400 dark:bg-[#e5e5e5] dark:focus:ring-1 dark:focus:ring-zinc-400"
              autoComplete="off"
              required
              placeholder="Mensagem"
              {...register("message")}
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-white-100 p-1 text-black transition hover:bg-gray-200 dark:bg-black dark:text-white-100 dark:hover:bg-black/90"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};
