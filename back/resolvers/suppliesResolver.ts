import { Supplies } from "../schemas";

const addSupplies = async (_: any, params: any) => {
  const supplies = new Supplies(params);

  try {
    await supplies.save();
    return supplies;
  } catch (error) {
    return error;
  }
};

const updateSupplies = async (_: any, { _id, ...params }: any) => {
  await Supplies.findByIdAndUpdate(_id, params);
  const res = await Supplies.findOne({
    _id: _id,
  });
  return res
};

const deleteSupplies = async (_: any, params: any) => {
  const res = await Supplies.findOne({
    _id: params._id,
  });
  await Supplies.findByIdAndDelete({ _id: params._id });
  return res;
};

const getSupplies = async (_: any, params: any) => {
  const supplies = await Supplies.find({
    clinicId: params.clinicId,
  });
  return supplies;
};

export { addSupplies, getSupplies, updateSupplies, deleteSupplies };
