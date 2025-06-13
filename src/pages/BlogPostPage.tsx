import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPost } from '@/lib/sanity.ts';
import { urlFor } from '@/lib/sanity.ts';
import type BlogPost from '@/ts/blog.ts';
import { PortableText } from '@portabletext/react';
import { Card, CardContent } from '@/components/ui/card.tsx';
import AppDrawer from '@/components/sections/AppDrawer.tsx';

function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      getPost(slug).then(setPost);
    }
  }, [slug]);

  if (!post) return <p className="text-center mt-20">Loading...</p>;

  return (
    <>
      <AppDrawer />
      <section className="pt-24 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-muted-foreground mb-6">
          <span>{`by ${post.author || 'Unknown'}`}</span> •{' '}
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            className="w-full rounded-lg mb-6 aspect-video object-cover"
          />
        )}

        <Card className="border-none shadow-none">
          <CardContent className="prose max-w-none p-0">
            <PortableText value={post.body} components={{}} />
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default BlogPostPage;
