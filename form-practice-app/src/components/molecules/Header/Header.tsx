import style from './styles.module.css';

type Props = {}

/**
 * Header
 *
 * @param props
 * @returns 
 */
export const Header = (props: Props) => {
  const {} = props;

  return (
    <div className={style.module}>
      <h1>Hello World</h1>
    </div>
  );
};