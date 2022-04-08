import { useQuery } from "@apollo/client";
import { GET_PATIENTS } from "../graphql";
import { Loading } from "../components";
import { Box } from '@mui/material';

const PatientScreen = () => {
    const { loading, error, data } = useQuery(GET_PATIENTS)

    const ShowData = () => {
        return (
            <Box></Box>
        )
    }

    console.log(data, data && data.getPatients)

    return (
        <div>
            {loading ?
                <Loading />
                :
                data
                &&
                <ShowData />
            }
        </div>
    )
}

export default PatientScreen