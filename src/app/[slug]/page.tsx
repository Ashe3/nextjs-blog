import Markdown from 'react-markdown';

import { getAllPosts } from '@/utils/posts';

export const generateStaticParams = () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getAllPosts().find((post) => post.slug === slug)!;

  return (
    <article className="p-3 md:p-20 lg:px-28">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <Markdown className="mt-4">{post.content}</Markdown>
    </article>
  );
};

export default Page;
