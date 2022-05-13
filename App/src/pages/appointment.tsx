import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const RenderAppointment = ({ item }: any) => {
    return (
        <View style={[styles.cardContainer]}>
            <Text>
                гарчиг: {item.title}
            </Text>
            <Text>
                эхлэх өдөр: {item.startDate}
            </Text>
            <Text>
                дуусах огноо: {item.endDate}
            </Text>
            <Text>
                тэмдэглэл: {item.notes}
            </Text>
        </View>
    )
}

export const AppointmentPage = () => {
    const [appointments, setAppointments] = useState([])
    const [after, setAfter] = useState([])
    const [before, setBefore] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query FindPatient($mobileNumber: String) {
                    findPatient(mobileNumber: $mobileNumber) {
                        _id
                        lastName
                    }
                    }`,
                mobileNumber: auth().currentUser?.phoneNumber?.slice(4)
            })
        })
            .then((response) => response.json())
            .then(({ data: findPatient }) => {
                fetch('http://localhost:4000/graphql', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: `query GetAppointments($patientId: String) {
                            getAppointments(patientId: $patientId) {
                              startDate
                              title
                              endDate
                              notes
                            }
                          }`,
                        patientId: findPatient._id
                    })
                })
                    .then((response) => response.json())
                    .then(({ data }) => {
                        setAppointments(data.getAppointments)
                    })
            })
            .catch(e => console.log(e))
    }, [])


    useEffect(() => {
        appointments.map((appointment: any) => {
            if (Date.now() <= Date.parse(appointment?.startDate)) {
                setAfter((afters): any => [...afters, appointment])
            } else {
                setBefore((befores): any => [...befores, appointment])
            }
        })
    }, [appointments])

    return (
        <View >
            <View style={[styles.listContainer, styles.margin]}>
                <Text>
                    эмчилгээний цаг товлолт
                </Text>
            </View>
            <ScrollView>
                {
                    appointments ?
                        <View style={styles.container}>
                            <View style={styles.listContainer}>
                                <Text>дараа</Text>
                                <FlatList data={after} renderItem={RenderAppointment} style={{ width: '80%' }} />
                            </View>
                            <View style={styles.listContainer}>
                                <Text>дууссан</Text>
                                <FlatList data={appointments} renderItem={RenderAppointment} style={{ width: '80%' }} />
                            </View>
                        </View>
                        : <Text>...ачаалж байна</Text>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    cardContainer: {
        margin: 10,
        height: 100,
        borderColor: 'black',
        borderWidth: 1,
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    margin: {
        margin: 15,
    }
})
