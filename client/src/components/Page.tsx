import * as React from 'react';

export const Header = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return <div className="page__header">{children}</div>;
};

export const Wrapper = ({
  children,
}: {
  children: JSX.Element[];
}): JSX.Element => {
  return <div className="page">{children}</div>;
};
