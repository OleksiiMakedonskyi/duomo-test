import { IQuestion, QuestionTypes } from '@/types/quiz';

import { default as chart } from './_assets/chart.png';

export const info: IQuestion = {
  type: QuestionTypes.INFO,
  id: 'info',
  title: 'See your Spiritual Growth\nprogress by Sep 17, 2024',
  answer: 'continue',
  image: chart,
};
