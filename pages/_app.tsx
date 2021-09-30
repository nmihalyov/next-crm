import '../styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import AppShell from '../components/AppShell/AppShell';

import store from '../store';

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