import Head from "next/head";
import content from "../../frontaid.content.json";

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>
          {page.title} | {content.title}
        </title>
      </Head>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = content.pages.map((page) => {
    const slug = page.path.split("/").slice(1);
    return { params: { slug } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const currentPath = `/${params.slug.join("/")}`;
  const page = content.pages.find((page) => page.path === currentPath) || {
    notfound: true,
  };
  return { props: { page } };
}
