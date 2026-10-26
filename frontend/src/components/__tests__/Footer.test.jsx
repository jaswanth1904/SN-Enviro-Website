import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders Facebook and LinkedIn links with correct URLs, targets, and rel attributes', () => {
    render(
      <MemoryRouter>
        <Footer isDarkMode={false} />
      </MemoryRouter>
    );

    const facebookLink = screen.getByLabelText('Facebook');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/snenvirosolutions/');
    expect(facebookLink).toHaveAttribute('target', '_blank');
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');

    const linkedInLink = screen.getByLabelText('LinkedIn');
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/sn-enviro-india-pvt-ltd-6a2293443');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');

    const twitterLink = screen.getByLabelText('Twitter');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', '#');
    expect(twitterLink).not.toHaveAttribute('target');
  });

  it('renders correctly in dark mode', () => {
    const { container } = render(
      <MemoryRouter>
        <Footer isDarkMode={true} />
      </MemoryRouter>
    );
    expect(container.querySelector('footer')).toHaveClass('bg-slate-950');
  });

  it('renders SN ENVIRO brand heading and the three group companies', () => {
    render(
      <MemoryRouter>
        <Footer isDarkMode={false} />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'SN ENVIRO' })).toBeInTheDocument();
    expect(screen.getByText('SN Enviro Solutions')).toBeInTheDocument();
    expect(screen.getByText('SN Enviro Services')).toBeInTheDocument();
    expect(screen.getByText('SN Enviro India Pvt. Ltd.')).toBeInTheDocument();
  });
});
