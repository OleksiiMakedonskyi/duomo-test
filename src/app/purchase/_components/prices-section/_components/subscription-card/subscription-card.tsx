import cn from 'classnames';
import { FC } from 'react';

import { IPlans, SubscriptionTypes } from '../../_constants/plans';

import IconRadioActive from './_assets/icon-radio-active';
import IconRadioDefault from './_assets/icon-radio-default';

import classes from './subscription-card.module.scss';

interface ISubscriptionCardProps extends IPlans {
  activeType: SubscriptionTypes;
  setActiveType: (activeType: SubscriptionTypes) => void;
}

const SubscriptionCard: FC<ISubscriptionCardProps> = ({
  type,
  name,
  price,
  isMostPopular,
  activeType,
  setActiveType,
}) => {
  const handleOnClick = () => {
    setActiveType(type);
  };

  const isActive = activeType === type;

  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(classes.card, {
        [classes.isMostPopular]: isMostPopular,
        [classes.isActive]: isActive,
      })}
      onClick={handleOnClick}
    >
      {isMostPopular && (
        <div className={classes.isMostPopular}>
          <span>MOST POPULAR</span>
        </div>
      )}

      <div className={classes.content}>
        <div className={classes.namePart}>
          {isActive ? <IconRadioActive /> : <IconRadioDefault />}

          <p className={classes.name}>{name}</p>
        </div>

        <div className={classes.pricePart}>
          <span className={classes.currency}>$</span>

          <span className={classes.price}>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
