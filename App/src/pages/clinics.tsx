import { useQuery } from "@apollo/client"
import React from "react"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { GET_CLINICS } from "../graphql/queries"



export const Clinics = () => {
    const { data, loading, error } = useQuery(GET_CLINICS)

    console.log(data, loading, error)

    // const [get] = useLazyQuery(GET_CLINICS)
    // const getClinic = async () => {
    //     const { data } = await get()
    //     console.log('data: ', data.getClinics)
    // }
    // getClinic()
    return (
        <SafeAreaView>
            <Text>
                HERE
            </Text>
        </SafeAreaView>
    )
}