import * as React from 'react';
import { MemoryRouter, Route } from 'react-router';

export function wrapWithRouterAndId(
  component: JSX.Element,
  id: string
): JSX.Element {
  return (
    <MemoryRouter initialIndex={0} initialEntries={[`/test-path/${id}`]}>
      <Route path="/test-path/:id">{component}</Route>
    </MemoryRouter>
  );
}

export function wrapWithRouterAndNestedId(
  component: JSX.Element,
  parent: string,
  parentId: string,
  id: string
): JSX.Element {
  return (
    <MemoryRouter
      initialIndex={0}
      initialEntries={[`/test-path/${parentId}/${id}`]}
    >
      <Route path={`/test-path/:${parent}/:id`}>{component}</Route>
    </MemoryRouter>
  );
}

export function wrapWithBasicRouter(component: JSX.Element): JSX.Element {
  return <MemoryRouter>{component}</MemoryRouter>;
}
