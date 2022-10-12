import styles from './styles.module.css';

export type ButtonProps = {
  text: string;
}

/**
 * Button
 * 
 * @param props.text
 * @returns 
 */
export const Button = (props: ButtonProps) => {
  const { text } = props;

  return (
    <button className={styles.button}>{text}</button>
  );
}
