import React from 'react';

export const Form = ({
  children,
  onSubmit,
}: {
  children: JSX.Element | JSX.Element[];
  onSubmit: () => void | Promise<void>;
}): JSX.Element => {
  const handleOnSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {children}
      <input type="submit" className="button" value="Save" />
    </form>
  );
};
