---
to: <%= path %>/<%= name%>.test.tsx
---
import { render } from '@testing-library/react';

import { <%= name %> } from './<%= name %>';

describe('<%= name %>コンポーネント', () => {
  test('<%= name %>コンポーネントのテスト', () => {
    render(<<%= name %> />);
  });
});
