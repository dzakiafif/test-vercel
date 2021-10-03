import classNames from 'classnames';
import { FC, HTMLInputTypeAttribute } from 'react';

interface InputProps {
  value: string;
  className?: string;
  placeholder?: string;
  id?: string;
  type?: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
  isDisabled?: boolean
  isReadOnly?: boolean
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  isDisabled,
  isReadOnly,
  type,
  className,
  placeholder,
  id,
}) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    id={id}
    onChange={(e) => onChange(e.target.value)}
    className={classNames('form-control', className)}
    disabled={isDisabled}
    readOnly={isReadOnly}
  />
);
