import Markdown from 'react-markdown';
import BackButton from '@/components/BackButton';

import { getAllPosts } from '@/utils/posts';
import { notFound } from 'next/navigation';

export const generateStaticParams = () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getAllPosts().find((post) => post.slug === slug)!;

  if (!post) return notFound();

  return (
    <div className="pt-5 lg:px-28">
      <BackButton />
      <article className="mt-5">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <Markdown className="mt-4">{post.content}</Markdown>
      </article>
    </div>
  );
};

export default Page;
