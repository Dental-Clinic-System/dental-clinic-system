import { addStaff, getStaff, loginStaff } from "./StaffMutation";

export default {
  Query: {
    getStaff,
    loginStaff,
  },
  Mutation: {
    addStaff,
  },
};
