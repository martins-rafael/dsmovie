import type { AppProps } from 'next/app';
import BaseTemplate from 'templates/Base';
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <BaseTemplate>
      <Component {...pageProps} />
    </BaseTemplate>
  );
}

export default MyApp;
