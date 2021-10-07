import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout, Row, Typography } from 'antd';

const HomePage: NextPage = () => {
  return (<>
    <Head>
      <title>Main | Next CRM</title>
    </Head>

    <Layout>
      <Row justify="center" align="middle" style={{minHeight: '100vh'}}>
        <Typography.Title>Welcome to Next CRM</Typography.Title>
      </Row>
    </Layout>
  </>);
};

export default HomePage;