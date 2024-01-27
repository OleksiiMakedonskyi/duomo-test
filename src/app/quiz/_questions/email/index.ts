import { IQuestion, QuestionTypes } from '@/types/quiz';

export const email: IQuestion = {
  type: QuestionTypes.INPUT,
  id: 'email',
  title: 'Enter your email to get\nyour personalised\nSpiritual Growth Plan',
  inputType: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  errorMessage: 'Invalid email',
};
