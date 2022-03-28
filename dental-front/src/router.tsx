import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const Login  = Loader(lazy(() => import('src/pages/Login')));


// Dashboards

const Dashboard = Loader(lazy(() => import('src/pages/dashboards')));

// Applications

const Appointments = Loader(lazy(() => import('src/pages/Appointments')));

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
    path: " ",
    element: (
      <SidebarLayout />
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
    ]
  },
  {
    path: '/',
    element: (
      <SidebarLayout />
      ),
      children: [
      {
        path: 'appointments',
        element: <Appointments />
      },
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
