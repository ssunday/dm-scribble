import * as React from 'react';

export const LoadingSpinner = (): JSX.Element => {
  return (
    <div className="la-ball-pulse-sync la-dark la-3x">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
