import type { AppProps } from 'next/app';
import '@/assets/styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
