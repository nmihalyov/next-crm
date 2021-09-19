import React from 'react';
import Head from 'next/head';
import Header from '../Header/Header';

const AppShell: React.FC = ({ children }) => {
  return <>
    <Head>
      <title>Next TS</title>
      <meta name="description" content="TypeScript React project on NextJS" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    {children}
  </>;
};

export default AppShell;