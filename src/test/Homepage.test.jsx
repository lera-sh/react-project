import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const user = userEvent.setup();

test('renders the title', async () => {
  render(<Homepage />, { wrapper: BrowserRouter });

  expect(screen.getByText(/World's Most Beautiful Destinations/i)).toBeInTheDocument();
});

test('renders the search input field', async () => {
  render(<Homepage />, { wrapper: BrowserRouter });

  const searchInput = screen.getByPlaceholderText('Search here...');
  expect(searchInput).toBeInTheDocument();
});

test('renders the card container', async () => {
  render(<Homepage />, { wrapper: BrowserRouter });

  const cardContainer = screen.getByTestId('card-container');
  expect(cardContainer).toBeInTheDocument();
});

test('updates the state when the search input field is changed', async () => {
  render(<Homepage />, { wrapper: BrowserRouter });

  const searchInput = screen.getByPlaceholderText('Search here...');
  userEvent.type(searchInput, ' ');
  const cards = screen.getAllByTestId('card');
  expect(cards).toHaveLength(15);
});
