import React from 'react';

import styles from './Loader.module.scss';

const Loader: React.FC<{
  show: boolean
}> = props => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;