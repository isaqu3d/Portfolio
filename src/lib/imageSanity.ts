import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./sanityClient";

const builderImage = imageUrlBuilder(sanityConfig);
export default builderImage;
