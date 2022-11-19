import Head from "next/head";

const Meta = ({ title, keywords, description }: any) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "NextJS Movies App",
  keywords: "MovieDB, programming, NextJS",
  description: "This is a test project for Darian Chirca",
};

export default Meta;