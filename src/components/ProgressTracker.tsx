import { Progress, Text, VStack } from '@chakra-ui/react';

interface ProgressTrackerProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressTracker = ({ currentStep, totalSteps }: ProgressTrackerProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <VStack w="full" spacing={2} mb={6}>
      <Progress value={progress} w="full" colorScheme="blue" />
      <Text fontSize="sm">
        Step {currentStep} of {totalSteps}
      </Text>
    </VStack>
  );
};

export default ProgressTracker;
