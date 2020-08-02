import React from 'react';
import { NavLink } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const Layout = (props: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/campaigns">Your Campaigns</NavLink>
        <AmplifySignOut />
      </nav>
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
