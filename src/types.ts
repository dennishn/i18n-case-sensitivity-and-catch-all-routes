import {ParsedUrlQuery} from "node:querystring";

export type BasePageProps<
    Params extends ParsedUrlQuery = ParsedUrlQuery
> = {
    params?: Params;
    preview?: boolean;
    draftMode?: boolean;
    locale?: string;
    locales?: string[];
    defaultLocale?: string;
    revalidateReason?: 'on-demand' | 'build' | 'stale';
}
