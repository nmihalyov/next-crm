import React from 'react';

import styles from './Button.module.scss';

const Button: React.FC<{
  onClick(e: React.MouseEvent): void,
  children: React.ReactNode
}> = props => {
  const { children, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  );
};

export default Button;