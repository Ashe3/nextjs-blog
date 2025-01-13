import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PostData {
  title: string;
  date: string;
  description: string;
}
export type Post = {
  content: string;
  slug: string;
} & PostData;

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPosts = (): Post[] => {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => !filename.startsWith('.'));

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace('.md', ''),
      content,
      ...(data as PostData),
    };
  });
};
