import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextInput } from '../../src/form/TextInput';

describe('TextInput', (): void => {
  const onChange = jest.fn();
  const options = {
    prefix: 'prefix',
    name: 'name',
    label: 'my label',
    value: '',
    onChange: onChange,
  };

  it('handles on change', (): void => {
    const { getByLabelText } = render(<TextInput {...options} />);

    fireEvent.change(getByLabelText(/my label/i), {
      target: { value: 'new value' },
    });

    expect(onChange).toHaveBeenCalledWith('name', 'new value');
  });
});
