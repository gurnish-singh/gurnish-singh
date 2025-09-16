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
import type { MediumPost } from '@/ts/blog';
import { urlFor } from '@/lib/sanity.ts';
import AppDrawer from '@/components/sections/AppDrawer.tsx';
import { getMediumPosts } from '@/lib/medium.ts';

function AllBlogs() {
  type CombinedPost =
    | (BlogPost & { source: 'sanity' })
    | (MediumPost & { source: 'medium' });
  const [combinedPosts, setCombinedPosts] = useState<CombinedPost[]>([]);
  useEffect(() => {
    Promise.all([getPosts(), getMediumPosts()]).then(([sanity, medium]) => {
      const latestSanityPosts = sanity.slice(0, 3).map((p: BlogPost) => ({
        ...p,
        source: 'sanity' as const,
      }));

      const latestMediumPosts = medium.map((p: MediumPost) => ({
        ...p,
        source: 'medium' as const,
      }));

      setCombinedPosts([...latestSanityPosts, ...latestMediumPosts]);
    });
  }, []);
  return (
    <>
      <AppDrawer />
      <section className="pt-16 px-2 sm:pt-24 sm:px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          All Blog Posts
        </h2>
        <Accordion type="multiple" className="space-y-3 sm:space-y-4">
          {combinedPosts.map((post, index) => (
            <AccordionItem key={index} value={`post-${index}`}>
              <AccordionTrigger className="px-2 py-2 sm:px-3 flex items-center justify-between text-left text-base sm:text-lg font-medium hover:bg-muted rounded-md">
                <span className="font-semibold flex-1 max-w-[120px] sm:max-w-[220px] md:max-w-[320px]">
                  {post.title}
                </span>
                <div className="text-right text-xs sm:text-sm text-muted-foreground ml-auto pl-2">
                  <span className="block">{`by ${post.author || 'Unknown'}`}</span>
                  <span className="text-xs text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-2 sm:px-3 pb-3 sm:pb-4">
                <Card className="flex flex-col h-full border border-muted rounded-md shadow-sm">
                  {post.source === 'sanity' ? (
                    post.mainImage && (
                      <img
                        src={urlFor(post.mainImage).width(800).url()}
                        alt={post.title}
                        className="w-full aspect-video object-cover rounded-t-md"
                        style={{ maxHeight: '200px' }}
                      />
                    )
                  ) : (
                    <img
                      src={
                        post.thumbnail || 'https://via.placeholder.com/800x400'
                      }
                      alt={post.title}
                      className="w-full aspect-video object-cover rounded-t-md"
                      style={{ maxHeight: '200px' }}
                    />
                  )}
                  <CardContent className="p-2 sm:p-3 space-y-1 sm:space-y-2">
                    <CardTitle className="text-base sm:text-lg">
                      {post.title}
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link
                      to={
                        post.source === 'sanity'
                          ? `/blog/${post.slug.current}`
                          : post.link
                      }
                      target="_blank"
                    >
                      <Button
                        variant="link"
                        className="text-blue-600 p-0 text-xs sm:text-base"
                      >
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
