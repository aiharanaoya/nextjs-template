import type { NextPage } from 'next';
import Head from 'next/head';

import style from './index.module.scss';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>nextjs-template</title>
      </Head>
      <main className={style['main-content']}>
        <h1 className={style['header']}>nextjs-template</h1>
      </main>
    </>
  );
};

export default Index;
