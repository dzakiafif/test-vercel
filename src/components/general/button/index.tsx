import classNames from 'classnames';
import { FC, ReactNode } from 'react';

type ButtonType = 'submit' | 'reset';

interface ButtonProps {
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
  title?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  className,
  id,
}) => (
  <button
    id={id}
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={classNames(
      `btn btn-warning bg-gradient-warning px-5 py-2`,
      className
    )}
  >
    {children}
  </button>
);

export default Button;
