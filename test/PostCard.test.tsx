import { render } from '@testing-library/react';
import { PostCard } from '@/components/PostCard';
import { Post } from '@/utils/posts';

test('PostCard renders correctly', () => {
  const post = {
    title: 'Test Post',
    description: 'Test description',
    slug: 'test-post',
  } as Post;

  const { getByText } = render(<PostCard post={post} />);

  expect(getByText('Test Post')).toBeInTheDocument();
  expect(getByText('Test description')).toBeInTheDocument();
});
