import { useState } from 'react';

type eventType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const useInput = (initial = '') => {
  const [value, setValue] = useState(initial);
  const onChange = (e: eventType): void => {
    setValue(e.target.value);
  };
  const clear = (): void => {
    setValue('');
  };

  return {
    bind: {
      value,
      onChange
    },
    get value() {
      return this.bind.value;
    },
    clear
  };
};

export default useInput;