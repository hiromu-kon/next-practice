import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/features/store';
import { OverlayLoading } from '@/components/OverlayLoading';
import { QueryClientProvider, QueryClient } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
        <OverlayLoading />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
