import { ServiceModel } from '../../models/schemas/'

export const service_mutation = {
    async addService(_: any, params: any) {
        const service = new ServiceModel(params)

        try {
            await service.save();
            return service;
        } catch (error) {
            return error;
        }
    },

    async deleteService(_: any, params: any) {
        ServiceModel.findByIdAndDelete({ _id: params._serviceId })
            .then(() => {
                console.log("service deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updateService(_: any, { _serviceId, ...params }: any) {
        ServiceModel.findByIdAndUpdate(_serviceId, params)
            .then(() => {
                console.log('service updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },
}