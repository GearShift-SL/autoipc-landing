import type { CollectionEntry } from 'astro:content';

export const getSortedPosts = (posts: CollectionEntry<'blog'>[]) => {
  return posts.sort(
    (a, b) =>
      Math.floor(new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000) -
      Math.floor(new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000)
  );
};

export const slugify = (string: string) => {
  return string
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};
