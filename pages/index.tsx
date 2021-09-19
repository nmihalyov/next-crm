import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Heading from '../components/Heading/Heading';

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Main | Next TS</title>
      </Head>

      <Heading>React TypeScript project with NextJS</Heading>
    </div>
  )
};

export default HomePage;