import { addStaff, getStaff, loginStaff } from "./staffResolver";

export default {
  Query: {
    getStaff,
    loginStaff,
  },
  Mutation: {
    addStaff,
  },
};
