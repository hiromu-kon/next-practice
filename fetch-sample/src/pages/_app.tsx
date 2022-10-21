import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/features/store';
import { OverlayLoading } from '@/components/OverlayLoading';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <OverlayLoading />
    </Provider>
  );
}

export default MyApp;
