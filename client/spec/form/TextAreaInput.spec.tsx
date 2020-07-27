import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextAreaInput } from '../../src/form/TextAreaInput';

describe('TextAreaInput', (): void => {
  const onChange = jest.fn();
  const options = {
    prefix: 'prefix',
    name: 'name',
    label: 'my label',
    value: '',
    onChange: onChange,
  };

  it('handles on change', (): void => {
    render(<TextAreaInput {...options} />);

    fireEvent.change(screen.getByLabelText(/my label/i), {
      target: { value: 'new value' },
    });

    expect(onChange).toHaveBeenCalledWith('name', 'new value');
  });
});
