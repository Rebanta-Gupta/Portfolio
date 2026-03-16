import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ProjectImageGallery from './ProjectImageGallery';

describe('ProjectImageGallery', () => {
  it('opens image from keyboard activation', () => {
    const onOpenImage = vi.fn();

    render(
      <ProjectImageGallery
        images={[
          {
            src: '/images/example.jpeg',
            alt: 'Example image',
            caption: 'Example caption',
            description: 'Example description',
          },
        ]}
        onOpenImage={onOpenImage}
      />
    );

    const button = screen.getByRole('button', { name: /open image 1/i });
    button.focus();
    fireEvent.keyDown(button, { key: 'Enter' });

    expect(onOpenImage).toHaveBeenCalledWith(0);
  });
});
