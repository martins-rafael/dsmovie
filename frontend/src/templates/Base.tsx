import Head from 'next/head';
import Navbar from "components/Navbar";

type BaseProps = {
  children: React.ReactNode;
};

const BaseTemplate = ({ children }: BaseProps) => (
  <>
    <Head>
      <title>DSMovie</title>
      <meta
        name="description"
        content="Aplicação desenvolvida na Semana Spring React"
      />
    </Head>
    <Navbar />
    {children}
  </>
);

export default BaseTemplate;
