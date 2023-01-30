import type { NextPage } from 'next';
import Head from 'next/head';

import { Button, BUTTON_DESIGN } from '@/components/Button';

import style from './index.module.scss';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>nextjs-template</title>
      </Head>
      <header className={style['header']}>nextjs-template</header>
      <main className={style['main']}>
        <div className={style['text']}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </div>
        <div className={style['button']}>
          <Button design={BUTTON_DESIGN.PRIMARY}>
            <span className={style['button-text']}>Action</span>
          </Button>
        </div>
        <div className={style['button']}>
          <Button design={BUTTON_DESIGN.SECONDARY}>
            <span className={style['button-text']}>Action</span>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Index;
