import { GetStaticProps, InferGetStaticPropsType } from "next";
import { BasePageProps } from "@/types";

type HomeProps = BasePageProps;

export default function Home(
  props: Readonly<InferGetStaticPropsType<typeof getStaticProps>>,
) {
  return (
    <main>
      <p>
        This is the <code>/pages/index.tsx</code> route
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
      params: { ...params },
      defaultLocale,
      preview: Boolean(preview),
      revalidateReason,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<HomeProps>;
