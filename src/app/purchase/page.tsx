'use client';

import { NextPage } from 'next';
import { useState } from 'react';

import PageWrapper from '@/components/page-wrapper/page-wrapper';

import PricesSection from './_components/prices-section/prices-section';
import BenefitsSection from './_components/benefits-section/benefits-section';
import AppAchievesSection from './_components/app-achives-section/app-achives-section';
import ReviewsSection from './_components/reviews-section/reviews-section';

import { SubscriptionTypes } from './_components/prices-section/_constants/plans';

import classes from './page.module.scss';

const Page: NextPage = () => {
  const [activeType, setActiveType] = useState<SubscriptionTypes>(
    SubscriptionTypes.MONTHLY,
  );

  return (
    <PageWrapper>
      <div className={classes.container}>
        <PricesSection activeType={activeType} setActiveType={setActiveType} />

        <BenefitsSection />

        <AppAchievesSection />

        <ReviewsSection />

        <PricesSection activeType={activeType} setActiveType={setActiveType} />
      </div>
    </PageWrapper>
  );
};

export default Page;
