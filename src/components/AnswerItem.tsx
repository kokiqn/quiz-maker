type AnswerItemProps = {
  isSelected: boolean;
  answer: string;
  correctAnswer: string;
  isDisabled?: boolean;
  onSelect?: () => void;
};

const AnswerItem = (props: AnswerItemProps) => {
  let classes = 'answerBtn ';
  if (props.isDisabled) {
    if (props.correctAnswer === props.answer) {
      classes += 'correct ';
    } else if (props.isSelected) {
      classes += 'incorrect ';
    }
  } else {
    if (props.isSelected) {
      classes += 'selected ';
    }
  }

  return (
    <button
      className={classes}
      onClick={props.onSelect}
      disabled={props.isDisabled}
      dangerouslySetInnerHTML={{ __html: props.answer }}
    />
  );
};

export default AnswerItem;
