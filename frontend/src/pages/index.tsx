import Navbar from 'components/Navbar';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>DSMovie</title>
        <meta
          name="description"
          content="Aplicação desenvolvida na Semana Spring React"
        />
      </Head>

      <Navbar />
    </>
  );
};

export default Home;
