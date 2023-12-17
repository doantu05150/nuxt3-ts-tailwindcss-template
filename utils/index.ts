import { MetaTags, appMeta } from "~/constants";
import type { IMetaTag } from "~/types";

export function generateSEOMetaTags(metatag: string | IMetaTag, _addition?: Record<string, string>) {
  let meta;
  if (metatag && typeof metatag === "string")
    meta = MetaTags[metatag];
  else if (typeof metatag === "object")
    meta = metatag;

  const title = meta?.title || appMeta.title;
  const description = meta?.description || appMeta.description;
  const image = meta?.image || appMeta.image;
  const addition = _addition || {};
  return {
    title: () => title,
    ogTitle: () => title,
    description: () => description,
    ogDescription: () => description,
    ogImage: () => image,
    twitterTitle: () => title,
    twitterDescription: () => description,
    twitterImage: () => image,
    ...addition,
  };
}
