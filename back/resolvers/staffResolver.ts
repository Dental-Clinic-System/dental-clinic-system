import { Staff } from "../schemas";

const addStaff = async (_: any, { clinicId, username, last_name, first_name, phone, email, password }: any) => {
  const date = new Date()
  const staff = new Staff({
    clinicId: clinicId,
    type: "reception",
    last_name: last_name,
    first_name: first_name,
    phone: phone,
    // clinic: Clinic!
    username: username,
    email: email,
    password: password,
    timestamp: true,
    last_login: date.toISOString(),
    availability: "A9_13"
  });

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

const getStaffs = async (_: any, { clinicId }: any) => {
  const staffs = await Staff.find(
    clinicId ? { clinicId } : {}
  );
  return staffs
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
  staff.clinicId = staff.clinicId.toString();
  return staff;
};
export { addStaff, getStaff, loginStaff, getStaffs };
