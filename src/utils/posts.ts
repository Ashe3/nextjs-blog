import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPosts = () => {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace('.md', ''),
      ...data,
      content,
    };
  });
};
