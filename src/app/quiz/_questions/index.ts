import { IQuestion } from '@/types/quiz';

import { processing } from './processing';
import { email } from './email';
import { info } from './info';

export const getQuestions = (): IQuestion[] => {
  // NOTE: у цій функції у майбутньому можна буде отримати прапор котрий свідчить про поточну групу з А/Б тесту
  // та керувати порядком та кількістю запитань у квізі на воронці. Наприклад:
  // const isTestGroup = tests?.testName === "1";
  // return [processing, email, isTestGroup ? doYouHaveCar : areYouSingle, info-question];

  return [processing, email, info];
};
