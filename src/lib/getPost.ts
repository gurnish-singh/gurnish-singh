import { sanity } from '@/lib/sanity.ts';

export async function getPost(slug: string) {
  return await sanity.fetch(`*[_type == "post" && slug.current == $slug][0]`, {
    slug,
  });
}
