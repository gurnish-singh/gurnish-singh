import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { getPosts } from '@/lib/getPosts.ts';
import { Link } from 'react-router-dom';
import type BlogPost from '@/ts/blog.ts';

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <section id="about" className="py-10 mt-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {posts.map((post: BlogPost) => (
          <Card key={post._id}>
            <CardContent>
              <CardTitle>{post.title}</CardTitle>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.slug.current}`} className="text-blue-600">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
