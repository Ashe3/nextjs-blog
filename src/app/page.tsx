import Pagination from '@/components/Pagination';
import { PostCard } from '@/components/PostCard';
import { getAllPosts } from '@/utils/posts';

const POSTS_PER_PAGE = 6;

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const generateMetadata = () => ({
  title: 'My Awesome Blog',
  description: 'Welcome to my blog where I share amazing posts!',
});

const Page = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  const currentPage = parseInt(page || '1', 10);
  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const posts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <h1 className="text-8xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center my-8 ml-4">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
};

export default Page;
