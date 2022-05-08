import { Suspense, lazy } from "react";
import { RouteObject } from "react-router";
import { Chart } from "./chart";

import SuspenseLoader from "./components/suspenseloader/index";
import {
  Clinic,
  PatientScreen,
  Appointment,
  Dashboard,
  PatientHistoryScreen,
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
    element: <Dashboard />,
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
    path: "/staff/:uid",
    element: <Profile />,
  },
  {
    path: "/staff",
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
    path: "/patient-history/:id/",
    element: <PatientHistoryScreen />,
  },
  {
    path: "/chart/:id",
    element: <Chart />,
  },
];

const registerRouter: RouteObject[] = [
  {
    path: "/:id",
    element: <LogIn />,
  },
];

export { router, registerRouter };
