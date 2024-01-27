import { FC } from 'react';

import { achives } from './_constants/achives';

import classes from './app-achives-section.module.scss';

const AppAchievesSection: FC = () => (
  <section className={classes.achivesSection}>
    <h2 className={classes.title}>
      People just like you achieved great results with App!
    </h2>

    <div className={classes.achives}>
      {achives.map((achive) => (
        <div key={achive.text} className={classes.achive}>
          <span className={classes.percent}>{achive.percent}</span>

          <p className={classes.text}>{achive.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AppAchievesSection;
