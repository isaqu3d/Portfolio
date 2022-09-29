import { Image } from "@chakra-ui/react";

export default function ProjectImage({ src, alt }) {
  return <Image borderRadius={14} w="full" src={src} alt={alt} mb={4} />;
}
