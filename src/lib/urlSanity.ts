import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import builderImage from "./imageSanity";

export function urlFor(source: SanityImageSource) {
  return builderImage.image(source);
}
