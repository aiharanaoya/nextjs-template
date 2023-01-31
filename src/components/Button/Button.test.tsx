import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Buttonコンポーネント', () => {
  test('ボタンのラベルがpropsで渡した値になっている', () => {
    const label = 'Action';
    render(<Button>{label}</Button>);
    const element = screen.getByRole('button', { name: label });
    expect(element).toBeInTheDocument();
  });

  test('propsでisDisabledを渡しているとボタンが非活性になっている', () => {
    render(<Button isDisabled>Action</Button>);
    const element = screen.getByRole('button');
    expect(element).toBeDisabled();
  });

  test('propsでisDisabledを渡していないとボタンが活性になっている', () => {
    render(<Button>Action</Button>);
    const element = screen.getByRole('button');
    expect(element).not.toBeDisabled();
  });

  test('ボタンを押下するとonClickで渡したイベントが発火する', async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Action</Button>);
    const element = screen.getByRole('button');
    await userEvent.click(element);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
