import { ChangeEventHandler, useState } from 'react';

const useSelect = () => {
  const [value, setValue] = useState<string | number>(-1);

  const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;

    setValue(value);
  };

  const reset = () => {
    setValue(-1);
  };

  return { value, onChange, reset };
};

export default useSelect;
