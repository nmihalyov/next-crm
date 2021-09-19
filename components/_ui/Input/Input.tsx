import React from 'react';

import styles from './Input.module.scss';

const Input: React.FC<{
  value: string | number,
  onChange(name: string, value: string): void,
  label: string,
  name: string,
  placeholder: string
}> = props => {
  const { value, onChange, label, name, placeholder } = props;

  return (
    <label className={styles.input}>
      <p className={styles.label}>{label}</p>
      <input
        className={styles.field}
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(name, e.target.value)} />
    </label>
  );
};

export default Input;