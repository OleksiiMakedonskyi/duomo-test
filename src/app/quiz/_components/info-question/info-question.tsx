import { FC, memo } from 'react';
import Image from 'next/image';

import { IQuizComponentProps } from '../quiz-wrapper/quiz-wrapper';

import StickyWrapper from '@/components/sticky-wrapper/sticky-wrapper';
import Button from '@/components/button/button';

import classes from './info-question.module.scss';

const InfoQuestion: FC<IQuizComponentProps> = ({
  question,
  saveAnswer,
  nextPage,
}) => {
  const { id, title, answer, image = '' } = question;

  const handleOnClick = () => {
    saveAnswer(id, answer);
    nextPage();
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>

      <Image src={image} alt="cover-image" priority />

      <StickyWrapper position="bottom" className={classes.buttonWrapper}>
        <Button className={classes.button} onClick={handleOnClick}>
          Continue
        </Button>
      </StickyWrapper>
    </div>
  );
};

export default memo(InfoQuestion);
