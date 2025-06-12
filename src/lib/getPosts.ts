import { sanity } from './sanity';

export async function getPosts() {
  return await sanity.fetch(`*[_type == "post"] | order(_createdAt desc){
    _id, title, slug, mainImage, publishedAt, excerpt
  }`);
}
