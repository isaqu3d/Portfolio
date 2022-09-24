import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" p={5}>
      &copy; {new Date().getFullYear()} Isaque de Sousa. Todos os direitos
      reservados.
    </Box>
  );
}
