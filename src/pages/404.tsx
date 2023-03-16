import { NextSeo } from "next-seo";
import { ButtonLink } from "../components/ButtonLink";
import { Heading } from "../components/Heading";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center h-full">
      <NextSeo
        title="Pagina não encontrada"
        description="Pagina não encontrada, error 404"
      />
      <Heading className="no-underline">Não encontrado</Heading>
      <p>A pagina que você está procurando não foi encontrada</p>
      <div className="flex justify-center mt-8">
        <span className="text-6xl px-6 py-2 font-sans font-semibold text-white transition duration-200 ease-in-out delay-300 skew-x-12 bg-purple-600 border-purple-700 rounded shadow-lg shadow-purple-600/50 hover:skew-y-6 hover:border-purple-800 text-white-100">
          404
        </span>
      </div>

      <div className="w-full h-[1px] bg-gray-600 my-8"></div>

      <div className="flex justify-center">
        <ButtonLink href="/">Retorne ao inicio</ButtonLink>
      </div>
    </div>
  );
}
