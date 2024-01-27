import { FC, HTMLInputTypeAttribute, ChangeEvent, memo } from 'react';
import cn from 'classnames';

import classes from './input.module.scss';

interface IInputProps {
  inputType: HTMLInputTypeAttribute;
  label: string;
  placeholder: string;
  errorMessage: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  disabled?: boolean;
  className?: string;
}

const Input: FC<IInputProps> = ({
  inputType,
  label,
  placeholder,
  errorMessage,
  handleInputChange,
  error,
  className,
}) => (
  <div className={cn(classes.inputWrapper, className)}>
    <label className={classes.label}>
      <input
        className={cn(classes.input, { [classes.invalid]: error })}
        type={inputType}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e)}
      />

      <span className={classes.title}>{label}</span>
    </label>

    {error && <div className={classes.errorMessage}>{errorMessage}</div>}
  </div>
);

export default memo(Input);
