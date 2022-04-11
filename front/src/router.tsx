import { Suspense, lazy } from 'react';
import { PartialRouteObject } from 'react-router';

import SuspenseLoader from './components/suspenseloader/index';

const Loader = (Component: any) => (props: any) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);
//pages
const Profile = Loader(lazy(() => import('./pages/profile')));
const Users = Loader(lazy(() => import('./pages/users')));

const router: PartialRouteObject[] = [
  {
    path: "/profile/:uid",
    element: <Profile />
  },
  {
    path: "/users",
    element: <Users />
  },
]

export default router;