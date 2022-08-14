import type { NextPage } from 'next';
import style from './index.module.scss';

const Index: NextPage = () => {
  return (
    <main className={style['main-content']}>
      <h1 className={style['header']}>nextjs-template</h1>
    </main>
  );
};

export default Index;
