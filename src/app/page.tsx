import { PostCard } from '@/components/PostCard';
import { getAllPosts } from '@/utils/posts';

export const Page = () => {
  const posts = getAllPosts();

  return (
    <main>
      <h1 className="text-8xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center my-8 inline-block ml-4">
        Blog Posts
      </h1>
      <div className="grid gap-4grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Page;
