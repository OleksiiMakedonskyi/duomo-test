This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/users-love-section.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Basic A/B Testing Concept

1. Необхідно створити дві версії елемента: оригінальну (A) і змінену (B). Зазвичай дизайн нової версії створюється командою креативу та дизайнерів, а затверджується менеджером.
2. Розподілити відвідувачів на дві рівні групи: контрольну (A) і експериментальну (B). Після припинення працездатності Google Optimize на заміну можна взяти до уваги такі сервіси як: Amplitude Experiment, Optimizely, VWO, Convert або Freshmarketer. У випадку тестування двох різних воронок необхідно використовувати редірект тест.
3. Показувати кожній групі свою версію елемента і збираючи дані про їхню поведінку. При достатній кількості користувачів або часу на протязі тесту необхідно проаналізувати дані у сервісах котрі збирають аналітику (Amplitude, Google Analytics) та визначити яка група краще конвертується.
4. Зробивши висновки обрати елемент, котрий показав кращий результат та використовувати його по дефолту на воронці. Старий елемент після певного часу бажано видалити, щоб не накопичувався код котрий більше ніколи не буде використовуватись.
5. Продовжувати проводити A/B тестування для інших елементів на сторінці, щоб постійно покращувати її ефективність і задоволення користувачів