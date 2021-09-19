import React from 'react';

import styles from './Checkbox.module.scss';

const Checkbox: React.FC<{
  children?: React.ReactNode,
  name: string | number,
  checked: boolean,
  onChange(e: React.ChangeEvent): void
}> = props => {
  const { children, name, checked, onChange } = props;

  return (
    <label className={styles.checkbox}>
      <input
        className={styles.input}
        type="checkbox"
        name={name.toString()}
        checked={checked}
        onChange={onChange} />
      <div className={styles.box}>
        <div className={styles.boxMark}></div>
      </div>
      {children && <p className={styles.label}>{children}</p>}
    </label>
  );
};

export default Checkbox;