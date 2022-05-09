import { AppointmentModel } from "../schemas";

const addAppointment = async (_: any, params: any) => {
    const appointment = new AppointmentModel(params);

    try {
        await appointment.save();
        return appointment;
    } catch (error) {
        return error;
    }
};

const updateAppointment = async (_: any, { _id, ...params }: any) => {
    const appointment = await AppointmentModel.findByIdAndUpdate(_id, params)
    return appointment
};

const deleteAppointment = async (_: any, params: any) => {
    const appointment = await AppointmentModel.findByIdAndDelete({ _id: params._id })
    return appointment
};

const getAppointment = async (_: any, params: any) => {
    const appointment = await AppointmentModel
        .findOne(params ? { ...params } : {})
        .populate("clinicId")
        .lean();
    return appointment;
};

const getAppointments = async (_: any, params: any) => {
    const appointment = await AppointmentModel.find(params)
    return appointment;
};

export { addAppointment, getAppointment, getAppointments, updateAppointment, deleteAppointment };
