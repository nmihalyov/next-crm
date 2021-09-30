import React from 'react';

import styles from './Input.module.scss';

const Input: React.FC<{
  value: string | number,
  onChange(event: React.ChangeEvent<HTMLInputElement>): void,
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
        onChange={onChange} />
    </label>
  );
};

export default Input;