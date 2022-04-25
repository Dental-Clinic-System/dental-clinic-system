import { Suspense, lazy } from "react";
import { RouteObject } from "react-router";

import SuspenseLoader from "./components/suspenseloader/index";
import {
  Clinic,
  PatientScreen,
  Appointment,
  Home,
  PatientHistoriesScreen,
  LogIn,
} from "./pages";
import { Services } from "./pages/services";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
//pages
const Profile = Loader(lazy(() => import("./pages/profile")));
const Users = Loader(lazy(() => import("./pages/staff")));

const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/appointment",
    element: <Appointment />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/profile/:uid",
    element: <Profile />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/clinics",
    element: <Clinic />,
  },
  {
    path: "/patients",
    element: <PatientScreen />,
  },
  {
    path: "/patient-histories",
    element: <PatientHistoriesScreen />,
  },
];

const registerRouter: RouteObject[] = [
  {
    path: "/:id",
    element: <LogIn />,
  },
];

export { router, registerRouter };
