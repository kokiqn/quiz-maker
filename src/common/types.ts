type SelectOption = {
  id: number | string;
  name: string;
};

type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

type SelectOptions = SelectOption[];
