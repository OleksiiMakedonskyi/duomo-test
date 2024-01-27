'use client';

import {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { NextPage } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

import { IQuestion, QuestionTypes } from '@/types/quiz';

import { getQuestions } from '@/app/quiz/_questions';

import Processing from '../processing/processing-question';
import Info from '../info-question/info-question';
import Input from '../input-question/input-question';

const quizComponentsMap = {
  [QuestionTypes.PROCESSING]: Processing,
  [QuestionTypes.INPUT]: Input,
  [QuestionTypes.INFO]: Info,
};

export interface IQuizComponentProps {
  question: IQuestion;
  saveAnswer: (questionId: string, answer: string | undefined) => void;
  nextPage: () => void;
}

const QuizComponent: FC<IQuizComponentProps> = ({
  question,
  saveAnswer,
  nextPage,
}): ReactElement | null => {
  const QuizComponent = quizComponentsMap[question.type];

  if (!QuizComponent) return null;
  return (
    <QuizComponent
      question={question}
      saveAnswer={saveAnswer}
      nextPage={nextPage}
    />
  );
};

const QuizWrapper: NextPage = () => {
  const questions = getQuestions();

  const [question, setQuestion] = useState<IQuestion>(questions[0]);

  const router = useRouter();
  const searchParams = useSearchParams();

  const currentQuestionNumber = Number(searchParams.get('id'));
  const currentQuestionIndex = currentQuestionNumber - 1;
  const currentQuestion = questions[currentQuestionIndex];

  const totalQuestionsCount = useMemo(() => {
    return questions.length || 0;
  }, [questions.length]);

  const saveAnswer = useCallback(
    (questionId: string, answer: string | undefined): void => {
      const savedAnswers = JSON.parse(localStorage.getItem('quiz') || '{}');

      if (savedAnswers) {
        localStorage.setItem(
          'quiz',
          JSON.stringify({ ...savedAnswers, [questionId]: answer }),
        );
      } else {
        localStorage.setItem('quiz', JSON.stringify({ [questionId]: answer }));
      }
    },
    [],
  );

  const handleSubmit = async () => {
    try {
      const data = { quiz: localStorage.getItem('quiz') };

      const postData = async () => {
        const response = await axios.post('/api/quiz', data);

        return response.data;
      };

      const res = await postData();

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const nextPage = useCallback(async (): Promise<void> => {
    const nextQuestionNumber = currentQuestionNumber + 1;

    if (nextQuestionNumber <= totalQuestionsCount) {
      router.push(`quiz?id=${nextQuestionNumber}`);
    } else {
      await handleSubmit();
      router.push('/purchase');
    }
  }, [currentQuestionNumber, router, totalQuestionsCount]);

  useEffect(() => {
    setQuestion(currentQuestion);
  }, [currentQuestion]);

  return (
    <QuizComponent
      question={question}
      saveAnswer={saveAnswer}
      nextPage={nextPage}
    />
  );
};

export default QuizWrapper;
