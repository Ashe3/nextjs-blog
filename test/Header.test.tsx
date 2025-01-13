import React from 'react';
import Header from '@/components/Header';

import { render, screen } from '@testing-library/react';

test('render header with title', () => {
  render(<Header />);
  expect(screen.getByText('My Blog')).toBeInTheDocument();
});
