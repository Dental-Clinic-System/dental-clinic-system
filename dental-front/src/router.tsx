import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/sidebarLayout';
import SuspenseLoader from 'src/components/suspenseLoader';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const Login  = Loader(lazy(() => import('src/pages/login')));

// Dashboards

const Dashboard = Loader(lazy(() => import('src/pages/dashboards')));

// Applications

const Appointments = Loader(lazy(() => import('src/pages/Appointments')));

const Users = Loader(lazy(() => import('src/pages/users')));
const Clinics = Loader(lazy(() => import('src/pages/clinics')));
const Patients = Loader(lazy(() => import('src/pages/patients')));
const Services = Loader(lazy(() => import('src/pages/services')));

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <Login />,
  },
  {
    path: 'components',
    element: (
      <SidebarLayout />
      ),
      children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
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
