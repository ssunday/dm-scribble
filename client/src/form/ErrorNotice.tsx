import React from 'react';

export const ErrorNotice = ({
  error,
}: {
  error: string | undefined;
}): JSX.Element | null => {
  if (error) {
    return <div className="error-notice">{error}</div>;
  }
  return null;
};
