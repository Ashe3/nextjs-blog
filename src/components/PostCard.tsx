import Link from 'next/link';

import { Post } from '@/utils/posts';

export const PostCard = ({ post }: { post: Post }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold">{post.title}</h2>
    <p>{post.description}</p>
    <Link href={`/${post.slug}`} className="text-blue-500 hover:underline">
      Read More
    </Link>
  </div>
);
