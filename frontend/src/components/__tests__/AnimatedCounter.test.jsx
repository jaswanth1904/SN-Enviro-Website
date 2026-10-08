import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AnimatedCounter from '../AnimatedCounter';

// Mock framer-motion so the intersection observer doesn't crash JSDOM
vi.mock('framer-motion', () => ({
  useInView: () => true
}));

describe('AnimatedCounter Component', () => {
  it('renders the initial starting value correctly', () => {
    render(<AnimatedCounter from={50} to={100} duration={1} />);
    
    // It should immediately render the starting value
    expect(screen.getByText('50')).toBeInTheDocument();
  });
});
