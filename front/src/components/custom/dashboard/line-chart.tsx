import { useTheme } from "@material-ui/core";
import { Bar, XAxis, ResponsiveContainer, BarChart } from "recharts";
import { useQuery } from "@apollo/client";
import { GET_STAFFS } from "../../../graphql";
import { reduce, values } from "lodash";

type StaffsCHartDataType = {
  [key: string]: {
    count: number;
    type: string;
  };
};
type StaffsDataType = {
  availability?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  type: string;
  username?: string;
  _id?: string;
};

export const LineChart = () => {
  const { palette } = useTheme();

  const clinicId = window.sessionStorage.getItem("clinicId");
  const { data } = useQuery(GET_STAFFS, {
    variables: {
      clinicId: clinicId,
    },
  });
  const { getStaffs }: { getStaffs: Array<StaffsDataType> } = data || {
    getStaffs: [],
  };

  const staffs = reduce(
    getStaffs,
    (prev: StaffsCHartDataType, cur: StaffsDataType) => ({
      ...prev,
      [cur.type]: {
        type: cur.type,
        count: prev[cur.type] ? prev[cur.type].count + 1 : 1,
      },
    }),
    {}
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={values(staffs)}>
        <XAxis dataKey="type" type="category" />
        <Bar dataKey="count" fill={palette.info.light} label />
      </BarChart>
    </ResponsiveContainer>
  );
};
