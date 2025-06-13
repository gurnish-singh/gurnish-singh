// src/lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type BlogPost from '@/ts/blog.ts';

const projectId = '0z26388c';
const dataset = 'production';
const apiVersion = '2025-06-12';
export const sanity = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source: any) {
  return builder.image(source);
}
export async function getPosts() {
  return await sanity.fetch(`*[_type == "post"] | order(_createdAt desc){
    _id, title, slug, mainImage, publishedAt, excerpt,"author": author->name
  }`);
}
export async function getPost(slug: string): Promise<BlogPost | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      body,
      "author": author->name
    }
  `;
  return await sanity.fetch(query, { slug });
}
