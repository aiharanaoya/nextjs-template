import { clsx } from 'clsx';
import { FC, MouseEventHandler, ReactNode } from 'react';

import style from './style.module.scss';

import { ButtonDesign, ButtonType, BUTTON_DESIGN, BUTTON_TYPE } from '.';

type Props = {
  /** ボタン内に表示させる要素 */
  children: ReactNode;
  /** ボタンのタイプ */
  type?: ButtonType;
  /** ボタンのデザイン */
  design?: ButtonDesign;
  /** 非活性か */
  isDisabled?: boolean;
  /** クリック時の処理 */
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

/**
 * ボタン
 */
export const Button: FC<Props> = ({
  children,
  type = BUTTON_TYPE.SUBMIT,
  design = BUTTON_DESIGN.SECONDARY,
  isDisabled = false,
  onClick
}: Props) => {
  return (
    <button
      type={type}
      className={clsx(style['button'], !!design && style[design])}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
