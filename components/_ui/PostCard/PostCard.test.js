import PostCard from './PostCard';
import { render, screen } from '@testing-library/react';

describe('PostCard:', () => {
  test('renders PostCard', () => {
    const { asFragment } = render(<PostCard />);
    expect(asFragment(<PostCard />)).toMatchSnapshot();;
  });
});