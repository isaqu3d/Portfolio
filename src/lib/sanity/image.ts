import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./client";

const builderImage = imageUrlBuilder(sanityConfig);
export default builderImage;
