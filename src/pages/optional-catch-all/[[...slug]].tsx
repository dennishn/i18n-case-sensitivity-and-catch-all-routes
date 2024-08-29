import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { BasePageProps } from "@/types";

type OptionalCatchAllProps = BasePageProps<{ slug?: string | Array<string> }>;

export default function OptionalCatchAll(
  props: Readonly<InferGetStaticPropsType<typeof getStaticProps>>,
) {
  return (
    <main>
      <p>
        This is the <code>/pages/optional-catch-all/[[...slug]].tsx</code> route
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
        slug: params?.slug ?? [],
      },
      defaultLocale,
      preview: Boolean(preview),
      revalidateReason,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<OptionalCatchAllProps>;

export const getStaticPaths = (async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;
