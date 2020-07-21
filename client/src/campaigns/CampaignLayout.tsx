import * as React from 'react';

export const CampaignLayout = (props: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return <div className="campaign-container">{props.children}</div>;
};
