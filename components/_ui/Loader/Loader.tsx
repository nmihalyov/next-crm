import { LoadingOutlined } from '@ant-design/icons';

import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <LoadingOutlined style={{fontSize: 30}} />
    </div>
  );
};

export default Loader;