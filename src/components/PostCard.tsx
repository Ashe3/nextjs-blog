import { Post } from '@/utils/posts';

export const PostCard = ({ post }: { post: Post }) => (
  <div className="p-4 border rounded-lg">
    <h2 className="text-2xl font-bold">{post.title}</h2>
    <p>{post.description}</p>
    <a href={`/${post.slug}`} className="text-blue-500 hover:underline">
      Read More
    </a>
  </div>
);
