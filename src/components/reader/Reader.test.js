import { render, screen } from '@testing-library/react';
import Reader from './Reader';

test('renders title', () => {
  render(<Reader title="Title" text="content" />);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders text', () => {
  render(<Reader title="Title" text="content" />);
  const textElement = screen.getByText(/content/i);
  expect(textElement).toBeInTheDocument();
});
