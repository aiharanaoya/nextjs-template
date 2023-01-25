/** ボタンタイプ */
export const BUTTON_TYPE = {
  SUBMIT: 'submit',
  BUTTON: 'button'
} as const;

/** ボタンタイプ */
export type ButtonType = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];

/** ボタンデザイン */
export const BUTTON_DESIGN = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
} as const;

/** ボタンデザイン */
export type ButtonDesign = typeof BUTTON_DESIGN[keyof typeof BUTTON_DESIGN];
