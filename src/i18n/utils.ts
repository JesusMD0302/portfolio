import type {
  CollectionEntry,
  CollectionKey,
  AnyEntryMap,
} from "astro:content";
import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, , lang] = url.pathname.split("/");

  if (lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  const localizedUI: Record<string, string> = {};

  return function t(key: keyof (typeof ui)[typeof lang]) {
    return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
  };
}

export function getLocalizedCollections<T extends keyof AnyEntryMap>(
  collection: CollectionEntry<T>[],
  lang: string,
) {
  return collection
    .map((item) => {
      const [lang, ...slug] = item.id.split("/");

      return {
        ...item,
        id: slug.join("/"),
        lang,
      };
    })
    .filter((item) => item.lang === lang);
}
