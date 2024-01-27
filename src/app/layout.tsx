import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Lora, Plus_Jakarta_Sans } from 'next/font/google';

import '@/styles/reset.scss';
import '@/styles/global.scss';

const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Duomo',
  description: 'Duomo test',
};

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${lora.variable} ${plusJakartaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
