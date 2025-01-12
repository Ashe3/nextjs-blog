import { PostCard } from '@/components/PostCard';
import { getAllPosts } from '@/utils/posts';

export const Page = () => {
  const posts = getAllPosts();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Page;
