import { UserModel } from '../models'

const queries = {
    hello: () => 'hello',
    getHospitals: async () =>  await UserModel.find()
}

export default queries;