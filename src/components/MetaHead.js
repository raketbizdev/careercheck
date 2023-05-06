import Head from "next/head";

const MetaHead = ({ title, description, image, favicon, baseUrl, ga4 }) => {
  return (
    <Head>
      <title>CareerCheck</title>
      <link rel="icon" href={favicon} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}${image}`} />

      {/* Google Analytics 4 */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4}');
          `,
        }}
      />
    </Head>
  );
};

export default MetaHead;
