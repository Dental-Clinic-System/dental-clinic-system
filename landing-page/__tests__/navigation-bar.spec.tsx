import React from 'react';
import { render } from '@testing-library/react';
import { NavigationBar } from '../components';

describe('NavigationBar', () => {
  it('renders NavigationBar component', () => {
    const container = render(<NavigationBar />);
    expect(container).toBeInTheDocument
  });
});