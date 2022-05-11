import { useTheme } from "@material-ui/core";
import { Bar, XAxis, ResponsiveContainer, BarChart } from "recharts";
import { useQuery } from "@apollo/client";
import { GET_STAFFS } from "../../../graphql";
import { Loading } from "../../";
import { size, chain } from "lodash";

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
  const { data, loading } = useQuery(GET_STAFFS, {
    variables: {
      clinicId: clinicId,
    },
  });
  const { getStaffs }: { getStaffs: Array<StaffsDataType> } = data || {
    getStaffs: [],
  };

  const staffs = chain(getStaffs)
    .groupBy("type")
    .mapValues((val, key) => {
      return { type: key, count: size(val) };
    })
    .values()
    .value();

  if (loading) return <Loading />;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={staffs}>
        <XAxis dataKey="type" type="category" />
        <Bar dataKey="count" fill={palette.info.light} label />
      </BarChart>
    </ResponsiveContainer>
  );
};
