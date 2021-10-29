import React from 'react';
import { useRouter } from 'next/router';
import { Layout, Row, Menu, Typography, Button } from 'antd';
import {
    ShareAltOutlined,
    HomeOutlined,
    ContainerOutlined,
    BookOutlined,
    UserOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const router = useRouter();
  const links = [
    {label: 'Main', href:'/', icon: <HomeOutlined />},
    {label: 'Tasks', href:'/tasks', icon: <ContainerOutlined />},
    {label: 'Posts', href:'/posts', icon: <BookOutlined />},
    {label: 'Users', href:'/users', icon: <UserOutlined />},
    {label: 'About', href:'/about', icon: <InfoCircleOutlined />}
  ];

  return (
    <Layout.Header className={styles.header}>
      <Row justify="space-between" align="middle">
        <Typography.Title level={4} className={styles.title} style={{fontWeight: 700}}><ShareAltOutlined /> Next CRM</Typography.Title>
        <Row align="middle">
          <Menu theme="dark" mode="horizontal" selectedKeys={[router.pathname]}>
            {links.map(el => 
              <Menu.Item key={el.href} onClick={() => router.push(el.href)} icon={el.icon}>
                {el.label}
              </Menu.Item>
            )}
          </Menu>
          <Button style={{marginLeft: 20}} ghost>Logout</Button>
        </Row>
      </Row>
    </Layout.Header>
  );
};

export default React.memo(Header);