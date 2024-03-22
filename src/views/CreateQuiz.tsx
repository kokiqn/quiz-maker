import QuizMakerSelect from '../components/QuizMakerSelect';
import QuestionSection from '../components/QuestionSection';

const CreateQuiz = () => {
  return (
    <div className="createQuiz">
      <h1>QUIZ MAKER</h1>
      <QuizMakerSelect />
      <QuestionSection />
    </div>
  );
};

export default CreateQuiz;
