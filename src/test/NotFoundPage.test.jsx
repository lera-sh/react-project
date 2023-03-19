import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';

test('renders the not found message and home page link', () => {
  render(
    <MemoryRouter initialEntries={['/unknown-page']}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MemoryRouter>
  );

  const notFoundMessage = screen.getByText(/page not found/i);
  const homePageLink = screen.getByRole('link', { name: /home/i });

  expect(notFoundMessage).toBeInTheDocument();
  expect(homePageLink).toHaveAttribute('href', '/');
});
