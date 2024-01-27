import { IQuestion, QuestionTypes } from '@/types/quiz';

import { IconCircleCheck, IconGrid, IconText, IconAi } from './_assets';

export const processing: IQuestion = {
  type: QuestionTypes.PROCESSING,
  id: 'processing',
  title: 'We are crafting\nyour spiritual growth plan',
  answer: 'processed',
  processingSteps: [
    {
      loaderStart: 0,
      stepText: 'Aligning with your goals',
      IconStep: IconCircleCheck,
    },
    {
      loaderStart: 25,
      stepText: 'Reviewing your answers',
      IconStep: IconGrid,
    },
    {
      loaderStart: 50,
      stepText: 'Picking Bible verses and prayers for you',
      IconStep: IconText,
    },
    {
      loaderStart: 75,
      stepText: 'Finalizing your personalized plan',
      IconStep: IconAi,
    },
  ],
};
