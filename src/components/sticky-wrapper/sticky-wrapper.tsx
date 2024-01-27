import cn from 'classnames';
import { FC, ReactNode } from 'react';

import classes from './sticky-wrapper.module.scss';

interface StickyWrapperProps {
  position: 'top' | 'bottom';
  children: ReactNode;
  className?: string;
}

const StickyWrapper: FC<StickyWrapperProps> = ({
  position,
  children,
  className,
}) => (
  <div
    className={cn(
      classes.container,
      {
        [classes.top]: position === 'top',
        [classes.bottom]: position === 'bottom',
      },
      className,
    )}
  >
    {children}
  </div>
);

export default StickyWrapper;
