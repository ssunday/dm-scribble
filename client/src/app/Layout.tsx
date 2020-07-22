import React from 'react';
import { NavLink } from 'react-router-dom';

export const Layout = (props: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/campaigns">Your Campaigns</NavLink>
      </nav>
      <div className="container">{props.children}</div>
    </>
  );
};
