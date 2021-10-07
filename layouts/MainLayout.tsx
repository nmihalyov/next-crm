import Head from 'next/head';
import { Layout } from 'antd';

import Header from '../components/Header/Header';

const MainLayout: React.FC<{
  children: React.ReactNode,
  title?: string
}> = props => {
  const { children, title } = props;

  return (<>
    <Head>
      <title>{title ? `${title} | Next CRM` : 'Next CRM'}</title>
      <meta name="description" content="TypeScript React project on NextJS" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Layout.Content>
      <Layout>
        <div className="container">
          {children}
        </div>
      </Layout>
    </Layout.Content>
  </>);
};

export default MainLayout;