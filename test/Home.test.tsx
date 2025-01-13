import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { act } from '@testing-library/react';
import { getAllPosts } from '@/utils/posts';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock getAllPosts, this is not necessary and we could call the real posts pages, but the content in them could be dynamic
jest.mock('@/utils/posts', () => ({
  getAllPosts: jest.fn().mockResolvedValue([
    {
      title: 'Test Post 1',
      description: 'This is test post 1',
      slug: '1',
    },
    {
      title: 'Test Post 2',
      description: 'This is test post 2',
      slug: '2',
    },
  ]),
}));

describe('Home', () => {
  it('renders blog posts', async () => {
    await act(async () => {
      render(await Home({ searchParams: Promise.resolve({ page: '1' }) }));
    });

    expect(getAllPosts).toHaveBeenCalled();
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    expect(screen.getByText('This is test post 1')).toBeInTheDocument();
    expect(screen.getByText('This is test post 2')).toBeInTheDocument();
  });
});
