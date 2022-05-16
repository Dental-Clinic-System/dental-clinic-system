import { Clinic, Staff } from "../schemas";

const addClinic = async (_: any, params: any) => {
  let clinic_name: string = params.clinic_name || params.title;
  clinic_name = clinic_name.slice(0, 10).toLowerCase();
  while (clinic_name.includes(" ")) {
    clinic_name = clinic_name.replace(" ", "");
  }

  const clinic = new Clinic({ ...params, clinic_name });
  try {
    await clinic.save();
    return clinic;
  } catch (error) {
    return error;
  }
};

const updateClinic = async (_: any, { _id, ...params }: any) => {
  await Clinic.findByIdAndUpdate(_id, params);
  const res = await Clinic.findOne({
    _id: _id,
  });
  return res;
};

const updateClinicStatus = async (_: any, { _id, ...params }: any) => {
  await Clinic.findByIdAndUpdate(_id, params);
  const res = await Clinic.findOne({
    _id: _id,
  });
  const date = new Date();
  const staff = new Staff({
    clinicId: _id,
    type: "admin",
    last_name: res.title,
    first_name: res.title,
    phone: res.contact_number,
    username: res.title,
    email: res.email,
    password: "12345678",
    timestamp: true,
    last_login: date.toISOString(),
    availability: "A9_13",
  });
  try {
    await staff.save();
  } catch (error) {
    return error;
  }
  return { ...res._doc, password: staff.password };
};

const deleteClinic = async (_: any, params: any) => {
  const res = await Clinic.findOne({
    _id: params._id,
  });
  await Clinic.findByIdAndDelete({ _id: params._id });
  return res;
};

const getClinic = async (_: any, params: any) => {
  const clinic = await Clinic.findOne({
    _id: params._id,
  });
  return clinic;
};

const getClinicByClinicName = async (_: any, params: any) => {
  const clinic = await Clinic.findOne({
    clinic_name: params.clinic_name,
  });
  return clinic;
};

const getClinics = async (_: any, params: any) => {
  const clinics = await Clinic.find({
    clinicId: params.clinicId,
  });
  console.log('here', clinics)
  return clinics;
};

export {
  addClinic,
  getClinic,
  updateClinic,
  getClinics,
  deleteClinic,
  getClinicByClinicName,
  updateClinicStatus,
};
