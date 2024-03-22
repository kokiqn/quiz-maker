import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options?: SelectOptions;
}

const Select = (props: SelectProps) => {
  const options = props.options ?? [];

  return (
    <select {...props}>
      <option value={-1} disabled>
        {props.placeholder}
      </option>
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
