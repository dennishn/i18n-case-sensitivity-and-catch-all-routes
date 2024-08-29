import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { BasePageProps } from "@/types";

type CatchAllProps = BasePageProps<{ slug?: string | Array<string> }>;

export default function CatchAll(
  props: Readonly<InferGetStaticPropsType<typeof getStaticProps>>,
) {
  return (
    <main>
      <p>
        This is the <code>/pages/[...slug].tsx</code> route
      </p>
      <p>The following props was passed from getStaticProps:</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </main>
  );
}

export const getStaticProps = (async ({
  locale,
  draftMode,
  locales,
  params,
  defaultLocale,
  preview,
  revalidateReason,
}) => {
  return {
    props: {
      locale,
      draftMode: Boolean(draftMode),
      locales,
      params: {
        ...params,
        slug: params?.slug,
      },
      defaultLocale,
      preview: Boolean(preview),
      revalidateReason,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<CatchAllProps>;

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;
