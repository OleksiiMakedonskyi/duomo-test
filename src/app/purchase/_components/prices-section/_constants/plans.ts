export enum SubscriptionTypes {
  MONTHLY = 'MONTHLY',
  THREE_MONTHS = 'THREE_MONTHS',
  SIX_MONTHS = 'SIX_MONTHS',
}

export interface IPlans {
  type: SubscriptionTypes;
  name: string;
  price: number;
  isMostPopular: boolean;
}

export const plans: IPlans[] = [
  {
    type: SubscriptionTypes.MONTHLY,
    name: '1-Month Plan',
    price: 10,
    isMostPopular: false,
  },
  {
    type: SubscriptionTypes.THREE_MONTHS,
    name: '3-Month Plan',
    price: 30,
    isMostPopular: true,
  },
  {
    type: SubscriptionTypes.SIX_MONTHS,
    name: '6-Month Plan',
    price: 60,
    isMostPopular: false,
  },
];
