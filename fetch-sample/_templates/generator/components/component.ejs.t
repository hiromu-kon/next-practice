---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---

import styles from './styles.module.scss';

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
    <div className={styles.module}>
      <h1>Hello World</h1>
    </div>
  );
};
