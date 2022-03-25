import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../components';

describe('Footer', () => {
  it('renders Footer component', () => {
    const container = render(<Footer />);
    expect(container).toBeInTheDocument
  });
});