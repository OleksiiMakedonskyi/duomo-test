import { FC, memo, useEffect, useState } from 'react';
import cn from 'classnames';

import useInterval from '@/hooks/use-interval';

import CircleLoader from './_components/circle-loader/cirle-loader';

import { IQuizComponentProps } from '../quiz-wrapper/quiz-wrapper';

import classes from './processing-question.module.scss';

const ProcessingQuestion: FC<IQuizComponentProps> = ({
  question,
  nextPage,
  saveAnswer,
}) => {
  const { id, title, answer, processingSteps = [] } = question;

  const [progress, setProgress] = useState(0);
  const [progressStep, setProgressStep] = useState(0);
  const [loaderDelay, setLoaderDelay] = useState<number | null>(100);

  useInterval(() => setProgress((prev) => prev + 1), loaderDelay);
  useInterval(
    () => setProgressStep((prev) => prev + 1),
    loaderDelay !== null ? loaderDelay / 4 : null,
  );

  useEffect(() => {
    if (progressStep >= 100) {
      setProgressStep(0);
    }
  }, [progressStep]);

  useEffect(() => {
    const handleProgress = async (): Promise<void> => {
      if (progress >= 100) {
        setLoaderDelay(null);
        saveAnswer(id, answer);
        setTimeout(() => nextPage(), 2000);
      }
    };

    void handleProgress();
  }, [progress]);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>

      <div className={classes.loaderContainer}>
        <CircleLoader value={progress} className={classes.mainLoader} />

        <p className={classes.percentage}>{progress}%</p>
      </div>

      <div className={classes.stepsContainer}>
        {processingSteps.map(({ stepText, loaderStart, IconStep }, index) => {
          const nextStepLoaderStart = processingSteps[index + 1]?.loaderStart;
          const showStepLoader = progress >= loaderStart;
          const hideStepLoader =
            progress >= nextStepLoaderStart || progress >= 100;
          const showStepDone =
            nextStepLoaderStart === undefined
              ? progress >= 100
              : loaderStart <= progress;
          const hideStepDone = progress <= nextStepLoaderStart;

          return (
            <div key={stepText} className={cn(classes.stepItem)}>
              <div className={classes.stepIconWrapper}>
                <div
                  className={cn(classes.stepIconDone, {
                    [classes.visible]: showStepDone,
                    [classes.hide]: hideStepDone,
                  })}
                >
                  <IconStep />
                </div>

                <CircleLoader
                  className={cn(classes.stepIconLoader, {
                    [classes.visible]: showStepLoader,
                    [classes.hide]: hideStepLoader,
                  })}
                  value={progressStep}
                  size={24}
                  thickness={2}
                  ringColor="#222B38"
                />
              </div>

              <p>{stepText}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ProcessingQuestion);
