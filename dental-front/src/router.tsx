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

const Transactions = Loader(lazy(() => import('src/pages/applications/Transactions/index')));
const UserProfile = Loader(lazy(() => import('src/pages/applications/Users/profile')));
const UserSettings = Loader(lazy(() => import('src/pages/applications/Users/settings')));

// Components

const Users = Loader(lazy(() => import('src/pages/Users')));
const Clinics = Loader(lazy(() => import('src/pages/Clinics')));
const Patients = Loader(lazy(() => import('src/pages/Patients')));
const Services = Loader(lazy(() => import('src/pages/Services')));

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
        path: 'clinics',
        element: <Clinics />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'patients',
        element: <Patients />
      },
      {
        path: 'services',
        element: <Services />
      }
    ]
  }
];

export default routes;
