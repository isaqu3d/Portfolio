import { ButtonLink } from "@components/ButtonLink";
import { Heading } from "@components/Heading";
import { NextSeo } from "next-seo";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col justify-center">
      <NextSeo
        title="Pagina não encontrada"
        description="Pagina não encontrada, error 404"
      />
      <Heading>Não encontrado</Heading> {/* className="no-underline" */}
      <p>A pagina que você está procurando não foi encontrada</p>
      <div className="mt-8 flex justify-center">
        <span className="text-white skew-x-12 rounded border-purple-700 bg-purple-600 px-6 py-2 font-sans text-6xl font-semibold text-white-100 shadow-lg shadow-purple-600/50 transition delay-300 duration-200 ease-in-out hover:skew-y-6 hover:border-purple-800">
          404
        </span>
      </div>
      <div className="my-8 h-[1px] w-full bg-gray-600"></div>
      <div className="flex justify-center">
        <ButtonLink href="/">Retorne ao inicio</ButtonLink>
      </div>
    </div>
  );
}
