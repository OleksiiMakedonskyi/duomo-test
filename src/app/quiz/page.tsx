import { NextPage } from 'next';
import { Suspense } from 'react';

import PageWrapper from '@/components/page-wrapper/page-wrapper';

import QuizWrapper from './_components/quiz-wrapper/quiz-wrapper';

const Page: NextPage = () => (
  <PageWrapper fullPageHeight>
    <Suspense>
      <QuizWrapper />
    </Suspense>
  </PageWrapper>
);

export default Page;
