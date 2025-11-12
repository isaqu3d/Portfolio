import { createClient } from "next-sanity";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  useCdn: false,
  apiVersion: "2021-08-31",
};

const client = createClient(sanityConfig);

export default client;
