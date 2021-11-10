import { FC } from 'react';
import styles from './Heading.module.scss';

const Heading: FC = ({ children }) => <h1 className={styles.heading}>{children}</h1>;

export default Heading;