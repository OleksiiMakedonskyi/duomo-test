import { FC, HTMLProps } from 'react';

import classes from './button.module.scss';

const Button: FC<HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => (
  <button {...props} className={classes.button} type="button">
    {children}
  </button>
);

export default Button;
