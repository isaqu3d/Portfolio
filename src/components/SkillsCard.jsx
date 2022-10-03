import { Box, useColorModeValue } from "@chakra-ui/react";

export default function SkillsCard({ children }) {
  return (
    <Box
      border="2px"
      borderColor={useColorModeValue("teal.300", "purple.700")}
      display="flex"
      justifyContent="center"
      px={4}
      py={[2, 2, 0]}
      opacity={[1, 1, 0.4]}
      borderRadius={4}
      _hover={{
        borderColor: useColorModeValue("teal.400", "pink.400"),
        opacity: 1,
      }}
    >
      {children}
    </Box>
  );
}
