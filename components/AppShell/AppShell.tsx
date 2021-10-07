import Head from 'next/head';
import { Layout } from 'antd';

import Header from '../Header/Header';

const AppShell: React.FC = ({ children }) => {
  return <>
    <Head>
      <title>Next CRM</title>
      <meta name="description" content="TypeScript React project on NextJS" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Layout.Content>
      {children}
    </Layout.Content>
  </>;
};

export default AppShell;