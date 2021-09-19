import '../styles/globals.css';
import type { AppProps } from 'next/app';

import AppShell from '../components/AppShell/AppShell';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
};

export default App;