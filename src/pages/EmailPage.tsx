import { useState } from 'react';
import { 
  VStack, 
  Input, 
  Button, 
  Text,
  FormControl,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react';

interface EmailPageProps {
  onNext: (email: string) => void;
}

const EmailPage = ({ onNext }: EmailPageProps) => {
  const [email, setEmail] = useState('');

  return (
    <VStack spacing={6} w="full" maxW="md" mx="auto" p={4}>
      <Text fontSize="xl" textAlign="center">
        Welcome to our survey!
      </Text>
      <FormControl>
        <FormLabel>Email (Optional)</FormLabel>
        <Input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
        <FormHelperText>
          Share your email to receive updates and special offers
        </FormHelperText>
      </FormControl>
      <Button colorScheme="blue" onClick={() => onNext(email)} w="full">
        Start Survey
      </Button>
    </VStack>
  );
};

export default EmailPage;