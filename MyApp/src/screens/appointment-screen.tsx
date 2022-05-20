import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RenderAppointment } from '../components'

const dummy = [
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62632cb2326cde8e5d000d14",
        "startDate": "05/21/2022 05:09 pm",
        "startMonth": "APR",
        "title": "Шүдний үзлэг",
        "endDate": "05/09/2022 05:09 pm",
        "doctor": "Баатар",
        "notes": "2 цоорхой шүд янзалсан",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62665acb0b7b60fc06dd53c6",
        "startDate": "05/13/2022 03:16 pm",
        "startMonth": "APR",
        "doctor": "Баясгалан",
        "title": "Шүдний ломбо",
        "endDate": "05/13/2022 03:17 pm",
        "notes": "Баруун талын дээд талын шүдэнд ломбо хийсэн",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62632cb2326cde8e5d000d14",
        "startDate": "04/09/2021 05:09 pm",
        "startMonth": "MAR",
        "doctor": "Баясгалан",
        "title": "Шүдний ломбо",
        "endDate": "05/09/2022 05:09 pm",
        "notes": "Зүүн талын доод талын шүдэнд ломбо хийсэн",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
    {
        "patientId": "626bb33c7acbdbec34f29b76",
        "serviceId": "62665acb0b7b60fc06dd53c6",
        "startDate": "03/13/2021 03:16 pm",
        "doctor": "Баатар",
        "startMonth": "FEB",
        "title": "Хиймэл шүд хийх",
        "endDate": "05/13/2021 03:17 pm",
        "notes": "Зүүн дээд талд хиймэл шүд хийсэн.",
        "staffId": "62666e92562a50b30aa62c34",
        "clinicId": "625fca30c1cf951c042bd5ec"
    },
]

export const AppointmentScreen = ({ navigation }: any) => {
    const [isEnable, setIsEnable] = useState(false)
    const Toogle = () => setIsEnable(!isEnable)

    const RenderAppointment = ({ item }: any) => {
        //@ts-ignore
        const startDate = Date(item.startDate).slice(4, 10)
        return (
            <View
                style={[styles.cardContainer, styles.lowShadow, styles.row]}
            >
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('AppointmentDetail')}
                >
                    <Text>
                        Detail
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <TouchableWithoutFeedback onPress={Toogle} >
                <View style={[styles.switch_container, styles.shadow, styles.row]}>
                    <View style={[styles.switch, styles.center, isEnable == false && styles.enable]}>
                        <Text style={[isEnable == false && styles.enable]}>
                            Удахгүй болох
                        </Text>
                    </View>
                    <View style={[styles.switch, styles.center, isEnable == true && styles.enable]}>
                        <Text style={[isEnable == true && styles.enable]}>
                            Түүх
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <FlatList
                style={{ width: '100%', marginTop: 30 }}
                renderItem={RenderAppointment}
                data={dummy}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={[styles.Button]} onPress={() => navigation.navigate('getAppointment')}>
                <View style={[styles.buttonText]}>
                    <Text style={{ color: 'white', fontSize: 18 }}>
                        Цаг товлох
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
        backgroundColor: 'white',
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
        shadowOpacity: 0.2,
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
        justifyContent: 'space-between',
        width: '100%',
        borderColor: 'white',
        borderWidth: 4,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#F5F7FB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Button: {
        position: 'absolute',
        bottom: 20,
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
        width: 240,
        padding: 2,
        fontSize: 14,
    }
})