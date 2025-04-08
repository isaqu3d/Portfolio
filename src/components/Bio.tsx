import { Heading } from "@/components/Heading";
import client from "@/lib/sanityClient";
import { groq } from "next-sanity";

export default async function Bio() {
  const [home] = await client.fetch(groq`
  *[_type == "home"]{
    biography
  }
`);

  const biography = home?.biography ?? [];

  return (
    <>
      <Heading>Bio</Heading>
      <div>
        {biography.length > 0 ? (
          biography.map(
            (item: { _key: string; year: number; description: string }) => (
              <div key={item._key} className="pl-14 -indent-14">
                <span className="mr-4 font-bold">{item.year}</span>{" "}
                {item.description}
              </div>
            ),
          )
        ) : (
          <div>Nenhuma biografia encontrada.</div>
        )}
      </div>
    </>
  );
}
