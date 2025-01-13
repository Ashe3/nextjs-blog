import Markdown from 'react-markdown';
import BackButton from '@/components/BackButton';

import { getAllPosts, getPostBySlug } from '@/utils/posts';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: '404 - Not Found',
      description: 'Page not found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.title.split(' ').join(', '),
  };
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="pt-5 px-7 lg:px-28">
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
