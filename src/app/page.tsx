'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import PageWrapper from '@/components/page-wrapper/page-wrapper';
import Button from '@/components/button/button';

import classes from './page.module.scss';

const Page: NextPage = () => {
  const router = useRouter();

  const startQuiz = () => router.push('/quiz?id=1');

  return (
    <PageWrapper fullPageHeight>
      <div className={classes.page}>
        <Button onClick={startQuiz}>Start Quiz</Button>
      </div>
    </PageWrapper>
  );
};

export default Page;
