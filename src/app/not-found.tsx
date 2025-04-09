import { Button } from "@/components/Button";
import { Heading } from "@/components/heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina não encontrada",
};

export default function NotFound() {
  return (
    <div className="flex h-full max-w-xl flex-col justify-center px-4">
      <Heading>Não encontrado!</Heading>
      <p className="text-xl">
        Oops! A pagina que você está procurando não foi encontrada.
      </p>

      <div className="mt-8 flex justify-center">
        <span className="text-white rounded border-purple-700 bg-purple-600 px-6 py-2 font-sans text-6xl font-semibold text-white-100 shadow-lg shadow-purple-600/50 transition hover:skew-x-12  hover:border-purple-800">
          Error 404
        </span>
      </div>

      <div className="my-8 h-[1px] w-full bg-gray-600" />
      <div className="flex justify-center">
        <Button href="/" variant="teal" size="md">
          Retorne ao inicio
        </Button>
      </div>
    </div>
  );
}
