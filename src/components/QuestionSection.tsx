import QuestionItem from './QuestionItem';
import Button from './UI/Button';
import { useQuizContext } from '../context/QuizContext';
import { QUESTIONS_AMOUNT } from '../common/constants';
import { useNavigate } from 'react-router-dom';
import { routesMap } from '../router';

const QuestionSection = () => {
  const navigate = useNavigate();
  const { selectedAnswers, handleSelectAnswer, questions } = useQuizContext();
  const showButton =
    !selectedAnswers.some((v) => v === undefined) &&
    selectedAnswers.length === QUESTIONS_AMOUNT;

  return (
    <section>
      <ul className="questionsList">
        {questions.map((item, idx) => (
          <QuestionItem
            key={item.question}
            {...item}
            selectedAnswer={selectedAnswers[idx]}
            handleSelectAnswer={handleSelectAnswer(idx)}
          />
        ))}
      </ul>
      {showButton && (
        <Button onClick={() => navigate(routesMap.results)} className="fullW">
          Submit quiz
        </Button>
      )}
    </section>
  );
};

export default QuestionSection;
