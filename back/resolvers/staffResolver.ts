import { Staff } from "../schemas";

const addStaff = async (_: any, params: any) => {
  const staff = new Staff(params);

  try {
    await staff.save();
    return staff;
  } catch (error) {
    return error;
  }
};
const getStaff = async (_: any, params: any) => {
  const staff = await Staff.findOne({
    clinicId: params.clinicId,
    _id: params._id,
  });
  return staff;
};

const loginStaff = async (_: any, params: any) => {
  const staff = await Staff.findOne({
    clinicId: params.clinicId,
    email: params.email,
    password: params.password,
  })
    .populate("clinicId")
    .lean();

  staff.clinic = staff.clinicId;
  staff.password = "N/A";
  staff.clinicId = staff.clinicId._id.toString();
  return staff;
};
export { addStaff, getStaff, loginStaff };
