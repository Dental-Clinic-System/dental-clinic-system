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
  Supplies,
} from "./pages";
import { Report } from "./pages/report";
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
    path: "/supplies",
    element: <Supplies />,
  },
  {
    path: "/patient-history/:id/",
    element: <PatientHistoryScreen />,
  },
  {
    path: "/chart/:id",
    element: <Chart />,
  },
  {
    path: "/report",
    element: <Report />,
  },
];

const registerRouter: RouteObject[] = [
  {
    path: "/:id",
    element: <LogIn />,
  },
];

export { router, registerRouter };
