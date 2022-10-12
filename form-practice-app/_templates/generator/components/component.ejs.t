---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---

import style from './styles.module.css';

type Props = {}

/**
 * <%= h.changeCase.pascal(component_name) %>
 *
 * @param props
 * @returns 
 */
export const <%= h.changeCase.pascal(component_name) %> = (props: Props) => {
  const {} = props;

  return (
    <div className={style.module}>
      <h1>Hello World</h1>
    </div>
  );
};