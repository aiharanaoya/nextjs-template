import type { NextPage } from 'next';
import Head from 'next/head';
import style from './index.module.scss';
import { Content } from '@/components/content';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>nextjs-template</title>
      </Head>
      <main className={style['main-content']}>
        <h1 className={style['header']}>nextjs-template</h1>
        <Content text={'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'} />
        <Content text={'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'} />
        <Content text={'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'} />
        <Content text={'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'} />
      </main>
    </>
  );
};

export default Index;
