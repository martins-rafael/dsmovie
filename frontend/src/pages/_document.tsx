import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  };

  render() {
    return (
      <Html lang="pt-BR" data-theme="dark">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#3d4451" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
