---
to: <%= path %>/<%= name %>.tsx
---
import { FC } from 'react';

import style from './style.module.scss';

<% if (haveProps) { -%>
type Props = {};
<% } -%>

export const <%= name %>: <%- typeAnnotate %> = <%= props %> => {
  return (
    <div className={style['default']}>
      <h1>Default</h1>
    </div>
  );
};
