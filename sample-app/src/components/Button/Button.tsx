import React from 'react';
import styles from '@/components/Button/Button.module.scss';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 *
 * @param props.label
 * @param props.onClick
 */
export const Button = (props: ButtonProps) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick} type='button' className={styles.button}>
      {label}
    </button>
  );
};
