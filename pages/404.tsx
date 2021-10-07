import type { NextPage } from 'next';
import Link from 'next/link';
import { Result, Button } from 'antd';

import MainLayout from '../layouts/MainLayout';

const NotFoundPage: NextPage = () => {
  return (
    <MainLayout title="Page not found">
      <Result
        status="404"
        title="404"
        subTitle="Page not found"
        extra={<Button type="primary"><Link href="/">Go to main page</Link></Button>} />
    </MainLayout>
  );
};

export default NotFoundPage;