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
import { urlFor } from '@/lib/sanity.ts';
function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const latestPosts = posts.slice(0, 5);

  return (
    <section id="blogs" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Latest Blogs</h2>

        <Carousel className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <CarouselContent className="gap-x-2">
            {latestPosts.map((post) => (
              <CarouselItem
                key={post._id}
                className="basis-full xs:basis-1/2 sm:basis-1/3 lg:basis-1/4 flex-shrink-0"
              >
                <Card className="flex flex-col h-full">
                  {post.mainImage && (
                    <img
                      src={urlFor(post.mainImage).width(800).url()}
                      alt={post.title}
                      className="w-full aspect-video object-cover rounded-t-md"
                    />
                  )}
                  <CardContent className="flex-1 p-4 space-y-2">
                    <div className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <CardTitle>{post.title}</CardTitle>
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
