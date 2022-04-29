import { PatientHistory } from "../schemas";

const addPatientHistory = async (_: any, params: any) => {
    const patientHistory = new PatientHistory(params);

    try {
        await patientHistory.save();
        return patientHistory;
    } catch (error) {
        return error;
    }
};

const updatePatientHistory = async (_: any, { _id, ...params }: any) => {
    const patientHistory = await PatientHistory.findByIdAndUpdate(_id, params)
    return patientHistory
};

const deletePatientHistory = async (_: any, params: any) => {
    const patientHistory = await PatientHistory.findByIdAndDelete({ _id: params._id })
    return patientHistory
};

const getPatientHistory = async (_: any, params: any) => {
    const patientHistory = await PatientHistory.findOne({
        _id: params._id,
    })
        .populate("clinicId").lean()
        .populate("patientId").lean()
    return patientHistory;
};

const getPatientHistories = async (_: any, params: any) => {
    const patientHistory = await PatientHistory.find(params)
    .populate("clinicId").lean()
    .populate("patientId").lean()
    .populate("serviceId").lean()

    console.log(patientHistory)
    return patientHistory;
};

export { addPatientHistory, getPatientHistory, getPatientHistories, updatePatientHistory, deletePatientHistory };
