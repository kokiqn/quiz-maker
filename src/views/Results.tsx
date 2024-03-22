import { useNavigate } from 'react-router-dom';
import QuestionItem from '../components/QuestionItem';
import Button from '../components/UI/Button';
import { useQuizContext } from '../context/QuizContext';
import { routesMap } from '../router';
import { QUESTIONS_AMOUNT } from '../common/constants';

const Results = () => {
  const navigate = useNavigate();
  const { selectedAnswers, questions, handleReset } = useQuizContext();

  const score = selectedAnswers.reduce(
    (acc, ans, idx) => (questions[idx].correct_answer === ans ? acc + 1 : acc),
    0
  );

  const scoreClass =
    'score ' + (score < 2 ? 'red' : score < 4 ? 'yellow' : 'green');

  const onReturnToHome = () => {
    handleReset();
    navigate(routesMap.createQuiz);
  };

  return (
    <section className="results">
      <h1>RESULTS</h1>
      <ul className="questionsList">
        {questions.map((item, idx) => (
          <QuestionItem
            key={item.question}
            {...item}
            selectedAnswer={selectedAnswers[idx]}
            isDisabled={true}
          />
        ))}
      </ul>
      <p className={scoreClass}>
        You scored {score} out of {QUESTIONS_AMOUNT}
      </p>
      <Button onClick={onReturnToHome} className="fullW">
        Create a new quiz
      </Button>
    </section>
  );
};

export default Results;
