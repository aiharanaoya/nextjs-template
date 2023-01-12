import { FC } from 'react';

import style from './content.module.scss';

type Props = {
  text: string;
};

export const Content: FC<Props> = ({ text }) => {
  return (
    <div className={style['main-content']}>
      <p>{text}</p>
      <p>{text}</p>
    </div>
  );
};
