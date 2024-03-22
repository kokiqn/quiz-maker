import { useMemo, useState } from 'react';
import AnswerItem from './AnswerItem';

type QuestionItemProps = Question & {
  selectedAnswer: string;
  handleSelectAnswer?: (answer: string) => void;
  isDisabled?: boolean;
};
const QuestionItem = (props: QuestionItemProps) => {
  console.log(props.question);
  const allAnswers: string[] = useMemo(() => {
    const insertIndex = (Math.random() * 100) % 4;
    return props.incorrect_answers.toSpliced(
      insertIndex,
      0,
      props.correct_answer
    );
  }, [props.question]);

  return (
    <li className="questionItem">
      <p dangerouslySetInnerHTML={{ __html: props.question }} />
      <div className="answersList">
        {allAnswers.map((answer) => (
          <AnswerItem
            key={answer}
            isSelected={props.selectedAnswer === answer}
            isDisabled={props.isDisabled}
            answer={answer}
            correctAnswer={props.correct_answer}
            onSelect={props.handleSelectAnswer?.bind(null, answer)}
          />
        ))}
      </div>
    </li>
  );
};

export default QuestionItem;
