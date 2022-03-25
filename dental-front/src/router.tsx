import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const Overview = Loader(lazy(() => import('src/pages/overview')));
const Login  = Loader(lazy(() => import('src/pages/login')));

// Dashboards

const Dashboard = Loader(lazy(() => import('src/pages/dashboards')));

// Applications

const Transactions = Loader(lazy(() => import('src/pages/applications/Transactions')));
const UserProfile = Loader(lazy(() => import('src/pages/applications/Users/profile')));
const UserSettings = Loader(lazy(() => import('src/pages/applications/Users/settings')));

// Components

const Buttons = Loader(lazy(() => import('src/pages/Buttons')));
const Modals = Loader(lazy(() => import('src/pages/Modals')));
const Accordions = Loader(lazy(() => import('src/pages/Accordions')));
const Tabs = Loader(lazy(() => import('src/pages/Tabs')));
const Badges = Loader(lazy(() => import('src/pages/Badges')));
const Tooltips = Loader(lazy(() => import('src/pages/Tooltips')));
const Avatars = Loader(lazy(() => import('src/pages/Avatars')));
const Cards = Loader(lazy(() => import('src/pages/Cards')));
const Forms = Loader(lazy(() => import('src/pages/Forms')));

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <Login />,
  },
  {
    path: '*',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/dashboard"
            replace
          />
        )
      },
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
    ]
  },
  {
    path: 'management',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/management/transactions"
            replace
          />
        )
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '/',
            element: (
              <Navigate
                to="details"
                replace
              />
            )
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          },
        ]
      }
    ]
  },
  {
    path: 'components',
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/components/buttons"
            replace
          />
        )
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      },
    ]
  }
];

export default routes;
