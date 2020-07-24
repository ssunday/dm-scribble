import React from 'react';

export const TextInput = ({
  prefix,
  name,
  label,
  value,
  onChange,
}: {
  prefix: string;
  name: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
}): JSX.Element => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.currentTarget;

    onChange(target.name, target.value);
  };

  const id = `${prefix}_${name}`;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
