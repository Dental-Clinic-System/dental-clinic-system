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
const getStaff = async (_: any, { clinicId, _id }: any) => {
  const staff = await Staff.findOne({
    clinicId: clinicId,
    _id: _id,
  });
  return staff;
};

const getStaffs = async (_: any, params: any) => {
  const staffs = await Staff.find(params ? {...params} : {});
  return staffs
};

const updateStaff = async(_: any, { clinicId, username, ...params } : any) => {
  try {
    const staff = await Staff.updateOne({ 
      clinicId: clinicId,
      username: username
    }, {
      $set: params
    })
    return staff ? true : false
  } catch(err) {
    return false
  }
}

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
export { addStaff, getStaff, loginStaff, getStaffs, updateStaff };
