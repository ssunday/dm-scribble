import React from 'react';
import { NavLink } from 'react-router-dom';

export const Layout = (props: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      {props.children}
    </div>
  );
};
