import React from 'react';

import classes from './circle-loader.module.scss';
import cn from 'classnames';

interface ICircleLoaderProps {
  value?: number;
  size?: number;
  thickness?: number;
  ringColor?: string;
  className?: string;
}

const CircleLoader: React.FC<ICircleLoaderProps> = ({
  value = 0,
  size = 200,
  thickness = 12,
  ringColor = '#0CBD68',
  className,
}) => {
  const radius = size / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg
      className={cn(classes.wrapper, className)}
      width={size + thickness}
      height={size + thickness}
    >
      <circle
        className={cn({ [classes.progressRing]: value < 100 && value > 0 })}
        stroke="white"
        strokeWidth={thickness}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={radius + thickness / 2}
        cy={radius + thickness / 2}
      />

      <circle
        className={cn({ [classes.progressRing]: value < 100 && value > 0 })}
        stroke={ringColor}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        fill="transparent"
        r={radius}
        cx={radius + thickness / 2}
        cy={radius + thickness / 2}
      />
    </svg>
  );
};

export default CircleLoader;
