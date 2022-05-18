import React from 'react'
import { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MedicationSvg from '../components/svg/medication-svg'


const dummy = [
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62632cb2326cde8e5d000d14",
        "startDate": "05/09/2022 05:09 pm",
        "title": "test",
        "endDate": "05/09/2022 05:09 pm",
        "notes": "testasdf",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62665acb0b7b60fc06dd53c6",
        "startDate": "05/13/2022 03:16 pm",
        "title": "asdfds",
        "endDate": "05/13/2022 03:17 pm",
        "notes": "asdf",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62632cb2326cde8e5d000d14",
        "startDate": "05/09/2022 05:09 pm",
        "title": "test",
        "endDate": "05/09/2022 05:09 pm",
        "notes": "testasdf",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62665acb0b7b60fc06dd53c6",
        "startDate": "05/13/2022 03:16 pm",
        "title": "asdfds",
        "endDate": "05/13/2022 03:17 pm",
        "notes": "asdf",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62632cb2326cde8e5d000d14",
        "startDate": "05/09/2022 05:09 pm",
        "title": "test",
        "endDate": "05/09/2022 05:09 pm",
        "notes": "testasdf",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62665acb0b7b60fc06dd53c6",
        "startDate": "05/13/2022 03:16 pm",
        "title": "asdfds",
        "endDate": "05/13/2022 03:17 pm",
        "notes": "asdf",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
]



const RenderAppointment = ({ item }: any) => {
    //@ts-ignore
    const startDate = Date(item.startDate).slice(4, 10)
    return (
        <View style={[styles.cardContainer, styles.lowShadow, styles.row]}>
            <View style={{ marginRight: 24 }}>
                <MedicationSvg />
            </View>
            <View>
                <Text style={[styles.cardTitle]}>
                    {item.title}
                </Text>
                <Text style={[styles.scheduleBox, styles.center]}>
                    Scheduled meeting on {startDate}
                </Text>
            </View>
        </View>
    )
}


export const AppointmentScreen = ({ navigation }: any) => {
    const [isEnable, setIsEnable] = useState(false)
    const Toogle = () => setIsEnable(!isEnable)
    return (
        <SafeAreaView style={[styles.container]}>
            <TouchableWithoutFeedback onPress={Toogle} >
                <View style={[styles.switch_container, styles.shadow, styles.row]}>
                    <View style={[styles.switch, styles.center, isEnable == false && styles.enable]}>
                        <Text style={[isEnable == false && styles.enable]}>
                            upcoming
                        </Text>
                    </View>
                    <View style={[styles.switch, styles.center, isEnable == true && styles.enable]}>
                        <Text style={[isEnable == true && styles.enable]}>
                            before
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Text style={[styles.title]}>
                {isEnable == false ? 'upcoming' : 'before'} Appointments
            </Text>
            <FlatList
                style={{ width: '100%' }}
                renderItem={RenderAppointment}
                data={dummy}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={[styles.Button]} onPress={() => navigation.navigate('getAppointment')}>
                <View style={[styles.buttonText]}>
                    <Text style={{ color: 'white' }}>
                        Get Appointment
                    </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F5F7FB',
        height: '100%'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    switch_container: {
        width: 320,
        height: 51,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 2,
        justifyContent: 'space-between'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    switch: {
        width: 153,
        height: 47,
        borderRadius: 5,
        fontSize: 16
    },
    enable: {
        backgroundColor: '#1EA6D6',
        color: 'white'
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        width: 320,
        marginTop: 30,
        marginBottom: 25
    },
    cardTitle: {
        fontWeight: '500',
        fontSize: 16,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
    },
    lowShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5.11,
    },
    cardContainer: {
        paddingVertical: 20,
        paddingHorizontal: 26,
        alignItems: 'center',
        width: '100%',
        borderColor: 'white',
        borderWidth: 4,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#F5F7FB',
    },
    Button: {
        position: 'absolute',
        bottom: 10,
        backgroundColor: '#0000',
        height: 43,
        width: 240,
    },
    buttonText: {
        height: 43,
        width: 240,
        borderRadius: 8,
        backgroundColor: '#1EA6D6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scheduleBox: {
        padding: 2,
    }
})