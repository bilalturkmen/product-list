import Head from "next/head";
import meta from "../content/meta";

export default function HeadComponent({
  title,
  description,
  image = meta.shareImage,
  canonicalUrl,
  children,
}) {
  return (
    <Head>
      <title>{meta.name}</title>
      <link rel="icon" href="/favicon.svg" />
      <link rel="canonical" href={canonicalUrl} />
      <meta charSet="utf-8"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta name="application-name" content={meta.name} />
      <meta property="og:title" content={meta.name} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={meta.name} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={meta.baseUri} />
      {children}
    </Head>
  );
}
