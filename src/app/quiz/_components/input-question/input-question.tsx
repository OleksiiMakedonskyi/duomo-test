import { ChangeEvent, FC, memo, useCallback, useState } from 'react';

import { emailRegExp } from '@/constants/reg-exp';
import { IQuizComponentProps } from '../quiz-wrapper/quiz-wrapper';

import Input from '@/components/input/input';
import Button from '@/components/button/button';
import StickyWrapper from '@/components/sticky-wrapper/sticky-wrapper';

import classes from './input-question.module.scss';

const InputQuestion: FC<IQuizComponentProps> = ({
  question,
  nextPage,
  saveAnswer,
}) => {
  const {
    id,
    title,
    inputType = '',
    label = '',
    placeholder = '',
    errorMessage = '',
  } = question;

  const [value, setValue] = useState<string>('');

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    },
    [],
  );

  const handleOnClick = () => {
    saveAnswer(id, value);
    nextPage();
  };

  const isEmpty = value === '';
  const isError = !emailRegExp.test(value) && !isEmpty;

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>

      <Input
        inputType={inputType}
        label={label}
        placeholder={placeholder}
        errorMessage={errorMessage}
        handleInputChange={handleInputChange}
        error={isError}
        className={classes.input}
      />

      <StickyWrapper position="bottom" className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={isError || isEmpty}
          onClick={handleOnClick}
        >
          Continue
        </Button>
      </StickyWrapper>
    </div>
  );
};

export default memo(InputQuestion);
