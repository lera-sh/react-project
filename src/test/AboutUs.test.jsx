import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';

test('renders the about header', async () => {
  render(<AboutUs />, { wrapper: BrowserRouter });

  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
});

test('renders the about description', async () => {
  render(<AboutUs />, { wrapper: BrowserRouter });

  const descriptionElement = screen.getByText(/what is the most beautiful place/i);
  expect(descriptionElement).toBeInTheDocument();
});

test('renders the about image', async () => {
  render(<AboutUs />, { wrapper: BrowserRouter });

  const imageElement = screen.getByRole('img', { name: '' });
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', '/collage.png');
});
