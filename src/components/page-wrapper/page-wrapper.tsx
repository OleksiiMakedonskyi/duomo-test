'use client';

import { FC, ReactNode } from 'react';
import cn from 'classnames';

import Header from '@/components/header/header';

import classes from './page-wrapper.module.scss';

interface IPageProps {
  fullPageHeight?: boolean;
  children: ReactNode;
}

const PageWrapper: FC<IPageProps> = ({ fullPageHeight = false, children }) => (
  <main
    className={cn(classes.page, { [classes.fullPageHeight]: fullPageHeight })}
  >
    <Header />

    <div className={classes.children}>{children}</div>
  </main>
);

export default PageWrapper;
