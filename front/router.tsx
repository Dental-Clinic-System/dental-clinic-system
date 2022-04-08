// import { lazy } from 'react';
// import { Navigate } from 'react-router-dom';
// import { PartialRouteObject } from 'react-router';

// const ProfilePage  = lazy(() => import('./src/pages/profile'));

// const routes: PartialRouteObject[] = [
//   {
//     path: "*",
//     element: (
//       // <SidebarLayout />
//       <></>
//       ),
//       children: [
//       {
//         path: 'profile',
//         element: <ProfilePage />,
//       }
//     ]
//   }
// ];

// export default routes;

import { Suspense, lazy } from 'react';
// import { Navigate } from 'react-router-dom';
import { PartialRouteObject } from 'react-router';

import SuspenseLoader from './src/components/suspenseloader/index';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);
//pages
const Profile = Loader(lazy(() => import('./src/pages/profile')));

const router: PartialRouteObject[] = [
  {
    path: "/profile",
    element: <Profile/>
  }
]

export default router;