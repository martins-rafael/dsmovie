import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description || 'App para avaliação de filmes e séries.'}
      />

      <meta property="og:site_name" content="DSMovie" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || 'App para avaliação de filmes e séries.'}
      />
      <meta property="og:url" content="https://rdcm-dsmovie.netlify.app/" />
      <meta property="og:image" content="https://rdcm-dsmovie.netlify.app/images/cover.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || 'App para avaliação de filmes e séries.'}
      />
      <meta name="twitter:url" content="https://rdcm-dsmovie.netlify.app/" />
      <meta name="twitter:image" content="https://rdcm-dsmovie.netlify.app/images/cover.jpg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
    </Head>
  );
};

export default SEO;
