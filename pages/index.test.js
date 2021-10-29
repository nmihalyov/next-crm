import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

describe('Home page:', () => {
  test('renders home page', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.getByText(/Welcome to Next CRM/i)).toBeInTheDocument();
  });
});