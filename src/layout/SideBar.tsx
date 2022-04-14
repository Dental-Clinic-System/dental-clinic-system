import { Link } from "react-router-dom";
import router from "../router";

export const Sidebar = (props: any) => {
  //   let { items } = props;
  const arr = [
    { path: "/", text: "Home" },
    { path: "appointment", text: "Appointments" },
    { path: "users", text: "Users" },
    { path: "clinics", text: "Clinics" },
    { path: "services", text: "Services" },
    { path: "patients", text: "Patients" },
    { path: "notation", text: "Notation"}
  ];
  return (
    <div>
      <ul>
        {arr.map((item, i) => {
          return (
            <li key={i}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
