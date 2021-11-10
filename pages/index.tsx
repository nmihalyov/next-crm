import type { NextPage } from 'next';

import { Row, Typography } from 'antd';

import MainLayout from '../layouts/MainLayout';

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Main">
      <Row justify="center" align="middle">
        <Typography.Title style={{fontWeight: 900}}>Welcome to Next CRM</Typography.Title>
      </Row>
      <Row justify="center" align="middle">
        <Typography.Paragraph>A simple application based on React, NextJS, Redux & TypeScript</Typography.Paragraph>
      </Row>
    </MainLayout>
  );
};

export default HomePage;