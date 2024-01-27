import { FC } from 'react';

import { plans, SubscriptionTypes } from './_constants/plans';

import Button from '@/components/button/button';
import SubscriptionCard from './_components/subscription-card/subscription-card';
import SubscriptionTerms from './_components/subscription-terms/subscription-terms';

import classes from './prices-section.module.scss';

interface IPricesSectionProps {
  activeType: SubscriptionTypes;
  setActiveType: (activeType: SubscriptionTypes) => void;
}

const PricesSection: FC<IPricesSectionProps> = ({
  activeType,
  setActiveType,
}) => (
  <section className={classes.pricesSection}>
    <h2 className={classes.title}>Choose your plan</h2>

    <ul className={classes.subscriptionsList}>
      {plans.map((plan, index) => (
        <li key={index}>
          <SubscriptionCard
            {...plan}
            activeType={activeType}
            setActiveType={setActiveType}
          />
        </li>
      ))}
    </ul>

    <Button>Get my plan</Button>

    <SubscriptionTerms />
  </section>
);

export default PricesSection;
