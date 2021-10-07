import '../styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '../store';

import AppShell from '../components/AppShell/AppShell';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </Provider>
  );
};

export default App;