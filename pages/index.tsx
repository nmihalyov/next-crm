import type { NextPage } from 'next';

import { Row, Typography } from 'antd';

import MainLayout from '../layouts/MainLayout';

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Main">
      <Row justify="center" align="middle">
        <Typography.Title>Welcome to Next CRM</Typography.Title>
      </Row>
    </MainLayout>
  );
};

export default HomePage;