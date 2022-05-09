import { Service } from "../schemas";

const addService = async (_: any, params: any) => {
  const service = new Service(params);

  try {
    await service.save();
    return service;
  } catch (error) {
    return error;
  }
};

const updateService = async (_: any, { _id, ...params }: any) => {
  await Service.findByIdAndUpdate(_id, params);
  const res = await Service.findOne({
    _id: _id,
  });
  return res
};

const deleteService = async (_: any, params: any) => {
  const res = await Service.findOne({
    _id: params._id,
  });
  await Service.findByIdAndDelete({ _id: params._id });
  return res;
};

const getService = async (_: any, params: any) => {
  const service = await Service.findOne(params ? {...params} : {});
  return service;
};

const getServices = async (_: any, params: any) => {
  const services = await Service.find({
    clinicId: params.clinicId,
  });
  return services;
};

export { addService, getService, updateService, getServices, deleteService };
