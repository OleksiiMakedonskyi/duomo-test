import { FC, HTMLInputTypeAttribute } from 'react';
import { StaticImageData } from 'next/image';

// NOTE: якщо запитань багато - типи можуть повторюватись у полі type кожного із questions (src/app/quiz/_questions),
// але id має бути унікальний
export enum QuestionTypes {
  PROCESSING = 'processing',
  INPUT = 'input',
  INFO = 'info',
}

interface IBreakpoint {
  loaderStart: number;
  stepText: string;
  IconStep: FC;
}

export interface IQuestion {
  type: QuestionTypes;
  id: string;
  title: string;
  answer?: string;
  processingSteps?: IBreakpoint[];
  inputType?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  image?: StaticImageData;
}
