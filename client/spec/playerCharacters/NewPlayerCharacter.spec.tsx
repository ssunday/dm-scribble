import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NewPlayerCharacter } from '../../src/playerCharacters/NewPlayerCharacter';
import { wrapWithRouterAndId } from '../support/RenderHelpers';

describe('NewPlayerCharacter', (): void => {
  it('renders heading and form label', async (): Promise<void> => {
    render(wrapWithRouterAndId(<NewPlayerCharacter />, '10'));

    expect(screen.getByText('New Player Character')).toBeDefined();
    expect(screen.getByText('Name')).toBeDefined();
  });

  it('handles on change', async (): Promise<void> => {
    render(wrapWithRouterAndId(<NewPlayerCharacter />, '10'));

    expect(screen.queryByDisplayValue('new name')).toBeNull();

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'new name' },
    });

    expect(screen.getByDisplayValue('new name')).toBeDefined();
  });
});
