import React from 'react';
import { Link } from 'react-router-dom';

export const Home = (): JSX.Element => {
  return (
    <div>
      <h1>DND Scrawl</h1>
      <Link to="/campaigns">Your Campaigns</Link>
    </div>
  );
};
