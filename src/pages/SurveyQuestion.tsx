import { VStack, Text, Button } from '@chakra-ui/react';
import TagOptions from '../components/TagOptions';
import ProgressTracker from '../components/ProgressTracker';

interface SurveyQuestionProps {
  question: string;
  options: string[];
  selected: string[];
  onSelect: (option: string) => void;
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
}

const SurveyQuestion = ({
  question,
  options,
  selected,
  onSelect,
  onNext,
  currentStep,
  totalSteps,
}: SurveyQuestionProps) => {
  return (
    <VStack spacing={6} w="full" maxW="md" mx="auto" p={4}>
      <ProgressTracker currentStep={currentStep} totalSteps={totalSteps} />
      <Text fontSize="xl" textAlign="center">
        {question}
      </Text>
      <TagOptions
        options={options}
        selected={selected}
        onSelect={onSelect}
      />
      <Button
        colorScheme="blue"
        onClick={onNext}
        w="full"
        isDisabled={selected.length === 0}
      >
        Next
      </Button>
    </VStack>
  );
};

export default SurveyQuestion;