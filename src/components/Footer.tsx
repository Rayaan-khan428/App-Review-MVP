import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="gray.100" textAlign="center" mt="auto">
      <Text fontSize="sm">© 2024 Your Restaurant Name</Text>
    </Box>
  );
};

export default Footer;
