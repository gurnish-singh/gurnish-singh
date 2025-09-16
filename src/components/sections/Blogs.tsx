import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getPosts } from '@/lib/sanity.ts';
import { Link } from 'react-router-dom';
import type BlogPost from '@/ts/blog';
import type { MediumPost } from '@/ts/blog';
import { urlFor } from '@/lib/sanity.ts';
import { getMediumPosts } from '@/lib/medium.ts';
import Badge from '@/components/ui/badge.tsx';
function Blogs() {
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
    <section id="blogs" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Latest Blogs</h2>

        <Carousel className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <CarouselContent className="gap-x-2">
            {combinedPosts.map((post, index) => (
              <CarouselItem
                key={index}
                className="basis-full xs:basis-1/2 sm:basis-1/3 lg:basis-1/4 flex-shrink-0"
              >
                <Card className="flex flex-col h-full">
                  {post.source === 'sanity' ? (
                    post.mainImage && (
                      <img
                        src={urlFor(post.mainImage).width(800).url()}
                        alt={post.title}
                        className="w-full aspect-video object-cover rounded-t-md"
                      />
                    )
                  ) : (
                    <img
                      src={
                        post.thumbnail || 'https://via.placeholder.com/800x400'
                      }
                      alt={post.title}
                      className="w-full aspect-video object-cover rounded-t-md"
                    />
                  )}
                  <CardContent className="flex-1 p-4 space-y-2">
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <Badge
                        className={
                          post.source === 'medium'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }
                      >
                        {post.source === 'medium'
                          ? 'From Medium'
                          : 'From My Blog'}
                      </Badge>
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
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
                      <Button variant="link" className="text-blue-600 p-0">
                        Read more →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>

        <div className="mt-6 text-center">
          <Link to="/blogs">
            <Button variant="outline">View All Blogs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
