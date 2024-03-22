import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  variant?: 'outline' | 'solid';
  className?: string;
}

const Button = (props: ButtonProps) => {
  const variant = props.variant ?? 'solid';

  return (
    <button
      {...props}
      className={`customBtn ${variant} ${props.className ?? ''}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
