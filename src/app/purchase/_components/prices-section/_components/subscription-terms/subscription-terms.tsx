import Link from 'next/link';
import { FC } from 'react';

import classes from './subscription-terms.module.scss';

const SubscriptionTerms: FC = () => (
  <div className={classes.subscriptionTerms}>
    You are enrolling in a 3-monthly subscription to
    <Link target="_blank" href="https://awesomeapp.com/subscription">
      https://awesomeapp.com/subscription
    </Link>
    with the discount price $29.99.You agree that the plan you selected will
    automatically be extended at the full price for successive renewal periods
    and you will be charged $99.99 every 3 months until you cancel the
    subscription. Payments will be charged from the card you specified here. You
    can cancel your subscription by contacting our customer support team via
    email at support@awesomeapp.com Subscription Policy. The charge will appear
    on your bill as &quot;awesomeapp&quot;
  </div>
);

export default SubscriptionTerms;
