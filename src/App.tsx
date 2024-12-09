import { useState } from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import EmailPage from './pages/EmailPage';
import SurveyQuestion from './pages/SurveyQuestion';
import ThankYouPage from './pages/ThankYouPage';
import { SurveyResponse } from './types';

const QUESTIONS = {
  foodQuality: {
    question: "How would you rate our food quality?",
    options: ["Excellent", "Good", "Average", "Needs Improvement", "Poor"]
  },
  serviceQuality: {
    question: "How was your service experience?",
    options: ["Very Attentive", "Friendly", "Professional", "Slow", "Inattentive"]
  },
  atmosphere: {
    question: "What did you think about our restaurant's atmosphere?",
    options: ["Cozy", "Modern", "Romantic", "Noisy", "Too Bright", "Too Dark"]
  }
};

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyResponses, setSurveyResponses] = useState<SurveyResponse>({
    email: '',
    foodQuality: [],
    serviceQuality: [],
    atmosphere: []
  });

  const handleEmailSubmission = (email: string) => {
    setSurveyResponses(prev => ({ ...prev, email }));
    setCurrentStep(1);
  };

  const handleOptionSelect = (question: keyof Omit<SurveyResponse, 'email'>, option: string) => {
    setSurveyResponses(prev => ({
      ...prev,
      [question]: prev[question].includes(option)
        ? prev[question].filter(item => item !== option)
        : [...prev[question], option]
    }));
  };

  const handleSubmitSurvey = async () => {
    // Here you would implement the logic to submit to Google Sheets
    console.log('Survey responses:', surveyResponses);
    setCurrentStep(4);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <EmailPage onNext={handleEmailSubmission} />;
      case 1:
        return (
          <SurveyQuestion
            question={QUESTIONS.foodQuality.question}
            options={QUESTIONS.foodQuality.options}
            selected={surveyResponses.foodQuality}
            onSelect={(option) => handleOptionSelect('foodQuality', option)}
            onNext={() => setCurrentStep(2)}
            currentStep={1}
            totalSteps={3}
          />
        );
      case 2:
        return (
          <SurveyQuestion
            question={QUESTIONS.serviceQuality.question}
            options={QUESTIONS.serviceQuality.options}
            selected={surveyResponses.serviceQuality}
            onSelect={(option) => handleOptionSelect('serviceQuality', option)}
            onNext={() => setCurrentStep(3)}
            currentStep={2}
            totalSteps={3}
          />
        );
      case 3:
        return (
          <SurveyQuestion
            question={QUESTIONS.atmosphere.question}
            options={QUESTIONS.atmosphere.options}
            selected={surveyResponses.atmosphere}
            onSelect={(option) => handleOptionSelect('atmosphere', option)}
            onNext={handleSubmitSurvey}
            currentStep={3}
            totalSteps={3}
          />
        );
      case 4:
        return <ThankYouPage />;
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Header />
        <Box flex="1" py={8}>
          {renderCurrentStep()}
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
