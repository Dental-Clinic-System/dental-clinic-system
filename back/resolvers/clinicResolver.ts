import { Clinic } from "../schemas";

const addClinic = async (_: any, params: any) => {
  let clinic_name = params.clinic_name || params.title;
  clinic_name = clinic_name.slice(0, 10).toLowerCase();

  const clinic = new Clinic({ ...params, clinic_name });

  try {
    await clinic.save();
    return clinic;
  } catch (error) {
    return error;
  }
};

const updateClinic = async (_: any, { _id, ...params }: any) => {
  console.log(_id, params);
  const clinic = await Clinic.findByIdAndUpdate(_id, params);
  return clinic;
};

const deleteClinic = async (_: any, params: any) => {
  const clinic = await Clinic.findByIdAndDelete({ _id: params._id });
  return clinic;
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
  return clinics;
};

export {
  addClinic,
  getClinic,
  updateClinic,
  getClinics,
  deleteClinic,
  getClinicByClinicName,
};
