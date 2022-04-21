import { Patient } from "../schemas";

const addPatient = async (_: any, params: any) => {
    const patient = new Patient(params);

    try {
        await patient.save();
        return patient;
    } catch (error) {
        return error;
    }
};

const updatePatient = async (_: any, { _id, ...params }: any) => {
    const patient = await Patient.findByIdAndUpdate(_id, params)
    return patient
};

const deletePatient = async (_: any, params: any) => {
    const patient = await Patient.findByIdAndDelete({ _id: params._id })
    return patient
};

const getPatient = async (_: any, params: any) => {
    const patient = await Patient.findOne({
        _id: params._id,
    })
    .populate("clinic_id")
    .lean();
    return patient;
};

const getPatients = async (_: any, params: any) => {
    const patient = await Patient.find(params)
    .populate("clinic_id")
    .lean();
    return patient;
};

export { addPatient, getPatient, getPatients, updatePatient, deletePatient };
