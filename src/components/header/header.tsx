import { FC } from 'react';

import IconArrowLeft from './_assets/icon-arrow-left';
import IconMenu from './_assets/icon-menu';

import classes from './header.module.scss';

const Header: FC = () => {
  const goBack = () => {
    history.back();
  };

  return (
    <header className={classes.quizHeader}>
      <button
        role="link"
        className={classes.button}
        onClick={() => goBack()}
        aria-label="Go back"
      >
        <IconArrowLeft />
      </button>

      <div className={classes.logoCentered}>
        <h3>App</h3>
      </div>

      <button className={classes.button} aria-label="Menu">
        <IconMenu />
      </button>
    </header>
  );
};

export default Header;
