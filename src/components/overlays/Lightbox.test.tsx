import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Lightbox from './Lightbox';

describe('Lightbox', () => {
  it('renders as a modal dialog and closes on Escape', () => {
    const onClose = vi.fn();

    render(
      <Lightbox
        images={[
          {
            src: '/images/example.jpeg',
            alt: 'Example image',
            caption: 'Example caption',
            description: 'Example description',
          },
        ]}
        currentIndex={0}
        onClose={onClose}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
      />
    );

    expect(screen.getByRole('dialog', { name: /project image lightbox/i })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
