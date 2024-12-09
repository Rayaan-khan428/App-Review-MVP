import { Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" py={4} bg="gray.100" textAlign="center">
      <Text fontSize="xl" fontWeight="bold">Restaurant Survey</Text>
    </Box>
  );
};

export default Header;