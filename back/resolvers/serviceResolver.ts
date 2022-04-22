import { Service } from "../schemas";

const addService = async (_: any, params: any) => {
  console.log(JSON.stringify(params));
  const service = new Service(params);

  try {
    await service.save();
    return service;
  } catch (error) {
    return error;
  }
};

const updateService = async (_: any, { _id, params }: any) => {
  const service = await Service.findByIdAndUpdate(_id, params);
  return service
};

const deleteService = async (_: any, params: any) => {
  const service = await Service.findByIdAndDelete({ _id: params._id });
  return service
};

const getService = async (_: any, params: any) => {
  const service = await Service.findOne({
    clinicId: params.clinicId,
    _id: params._id,
  });
  return service;
};

const getServices = async (_: any, params: any) => {
  const services = await Service.find({
    clinicId: params.clinicId
  });
  return services;
};

export { addService, getService, updateService, getServices, deleteService };