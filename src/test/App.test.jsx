import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  expect(screen.getByText(/World's Most Beautiful Destinations/i)).toBeInTheDocument();

  await user.click(screen.getByText(/Home/i));
  expect(screen.getByText(/World's Most Beautiful Destinations/i)).toBeInTheDocument();

  await user.click(screen.getByText(/About/i));
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
});

test('landing on a 404 page', () => {
  const notFoundPage = '/404';

  render(
    <MemoryRouter initialEntries={[notFoundPage]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Page not found. Error 404/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/some-bad-route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Page not found. Error 404/i)).toBeInTheDocument();
});
