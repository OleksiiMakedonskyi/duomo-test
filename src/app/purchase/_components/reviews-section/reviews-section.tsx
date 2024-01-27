import { FC } from 'react';

import { reviews } from './_constants/reviews';

import classes from './reviews-section.module.scss';
import IconStar from '@/app/purchase/_components/reviews-section/_assets/icon-star';

const ReviewsSection: FC = () => (
  <section className={classes.reviewsSection}>
    <h2 className={classes.title}>Users love App!</h2>

    <div className={classes.reviews}>
      {reviews.map((review) => (
        <div key={review.message} className={classes.review}>
          <div className={classes.topPart}>
            <div className={classes.textPart}>
              <p className={classes.name}>{review.name}</p>

              <p className={classes.date}>{review.date}</p>
            </div>

            <div className={classes.starsWrapper}>
              {Array.from(Array(5)).map((index) => (
                <IconStar key={index} />
              ))}
            </div>
          </div>

          <p className={classes.message}>{review.message}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewsSection;
