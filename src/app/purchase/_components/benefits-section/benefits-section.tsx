import { FC } from 'react';

import { benefits } from './_constants/benefits';

import IconCheck from './_assets/icon-check';

import classes from './benefits-section.module.scss';

const BenefitsSection: FC = () => (
  <section className={classes.benefitsSection}>
    <h2 className={classes.title}>What you get</h2>

    <div className={classes.benefits}>
      {benefits.map((benefit) => (
        <div key={benefit} className={classes.benefit}>
          <IconCheck />

          <p>{benefit}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection;
