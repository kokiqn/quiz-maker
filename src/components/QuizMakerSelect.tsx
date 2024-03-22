import { useEffect, useState } from 'react';
import useSelect from '../hooks/useSelect';
import Button from './UI/Button';
import Select from './UI/Select';
import { useQuizContext } from '../context/QuizContext';
import { QUESTIONS_AMOUNT } from '../common/constants';

const difficultyOptions = [
  {
    id: 'easy',
    name: 'Easy',
  },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' },
];

const QuizMakerSelect = () => {
  const { handleCreateQuiz } = useQuizContext();
  const [categoryOptions, setCategoryOptions] = useState<SelectOptions>([]);
  const { value: category, onChange: handleChangeCategory } = useSelect();
  const { value: difficulty, onChange: handleChangeDifficulty } = useSelect();

  const quizUrl = `https://opentdb.com/api.php?amount=${QUESTIONS_AMOUNT}&category=${category}&difficulty=${difficulty}&type=multiple`;

  const onCreate = async () => {
    if (category !== -1 && difficulty !== -1) {
      try {
        const res = await fetch(quizUrl);
        if (!res.ok) {
          return alert('Too many requests!');
        }
        const data = await res.json();
        const results: Question[] = data.results;
        handleCreateQuiz(results);
      } catch (e) {
        console.error(e);
      }
    } else {
      alert('Make sure you have selected a category and difficulty!');
    }
  };

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((data) => setCategoryOptions(data?.trivia_categories));
  }, []);

  return (
    <div className="selectGroup">
      <Select
        name="categorySelect"
        id="categorySelect"
        placeholder="Select a category"
        options={categoryOptions}
        value={category}
        onChange={handleChangeCategory}
      />
      <Select
        name="difficultySelect"
        id="difficultySelect"
        placeholder="Select a difficulty"
        options={difficultyOptions}
        value={difficulty}
        onChange={handleChangeDifficulty}
      />
      <Button variant="outline" onClick={onCreate} id="createBtn">
        Create
      </Button>
    </div>
  );
};

export default QuizMakerSelect;
