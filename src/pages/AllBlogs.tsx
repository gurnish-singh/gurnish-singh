import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx';
import { Card, CardContent, CardTitle } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useEffect, useState } from 'react';
import { getPosts } from '@/lib/sanity.ts';
import { Link } from 'react-router-dom';
import type BlogPost from '@/ts/blog.ts';
import { urlFor } from '@/lib/sanity.ts';
import AppDrawer from '@/components/sections/AppDrawer.tsx';

function AllBlogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <>
      <AppDrawer />
      <section className="pt-24 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">All Blog Posts</h2>

        <Accordion type="multiple" className="space-y-4">
          {posts.map((post) => (
            <AccordionItem key={post._id} value={`post-${post.slug.current}`}>
              <AccordionTrigger className="px-3 py-2 flex items-center justify-between text-left text-base font-medium hover:bg-muted rounded-md">
                <span className="font-semibold truncate flex-1">
                  {post.title}
                </span>
                <div className="text-right text-sm text-muted-foreground ml-auto pl-2">
                  <span className="block">{`by ${post.author || 'Unknown'}`}</span>
                  <span className="text-xs text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 pb-4">
                <Card className="flex flex-col h-full border border-muted rounded-md shadow-sm">
                  {post.mainImage && (
                    <img
                      src={urlFor(post.mainImage).width(700).url()}
                      alt={post.title}
                      className="w-full aspect-video object-cover rounded-md mb-3"
                    />
                  )}
                  <CardContent className="p-3 space-y-2">
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.slug.current}`}>
                      <Button variant="link" className="text-blue-600 p-0">
                        Read more →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

export default AllBlogs;
