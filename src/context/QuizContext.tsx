import { useContext, createContext, useState, PropsWithChildren } from 'react';

const QuizContext = createContext<{
  questions: Question[];
  selectedAnswers: string[];
  handleCreateQuiz: (questions: Question[]) => void;
  handleSelectAnswer: (questionIdx: number) => (answer: string) => void;
  handleReset: () => void;
}>({
  questions: [],
  selectedAnswers: [],
  handleCreateQuiz: () => {},
  handleSelectAnswer: () => () => {},
  handleReset: () => {},
});

export const useQuizContext = () => useContext(QuizContext);

const QuizContextProvider = (props: PropsWithChildren) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleCreateQuiz = (questions: Question[]) => {
    setQuestions(questions);
    setSelectedAnswers([]);
  };

  const handleSelectAnswer = (questionIdx: number) => (answer: string) => {
    setSelectedAnswers((prev) => {
      const copy = [...prev];
      copy[questionIdx] = answer;
      return copy;
    });
  };

  const handleReset = () => {
    setQuestions([]);
    setSelectedAnswers([]);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        selectedAnswers,
        handleCreateQuiz,
        handleSelectAnswer,
        handleReset,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
