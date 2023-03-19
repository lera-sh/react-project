import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';

test('renders a header with Home and About links', async () => {
  render(<Layout />, { wrapper: BrowserRouter });

  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
});

test('renders a footer with a specific text', async () => {
  render(<Layout />, { wrapper: BrowserRouter });

  expect(screen.getByText(/lera-sh Rolling-Scopes school 2023/i)).toBeInTheDocument();
});

test('renders the Outlet component', async () => {
  render(<Layout />, { wrapper: BrowserRouter });

  expect(screen.getByRole('main')).toBeInTheDocument();
});
