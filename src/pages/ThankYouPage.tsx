import { VStack, Text, Button } from '@chakra-ui/react';

const ThankYouPage = () => {
  return (
    <VStack spacing={6} w="full" maxW="md" mx="auto" p={4}>
      <Text fontSize="xl" textAlign="center">
        Thank you for completing our survey!
      </Text>
      <Text textAlign="center">
        Your feedback helps us improve our service.
      </Text>
    </VStack>
  );
};

export default ThankYouPage;