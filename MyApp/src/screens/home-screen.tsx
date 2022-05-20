import { borderRadius, display, fontSize } from '@mui/system'
import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { TimeIcon } from '../components/svg'
import { SearchIcon } from '../components/svg/search-svg'

const medicineDummy = [
    {
        name: 'Advil',
        dose: 'Ibuprofen Tablets, 200 mg',
        description: 'heltgibgnbinjgnbjvnjginbivnn'
    },
    {
        name: 'Tylenol',
        dose: 'Ibuprofen Tablets, 200 mg',
        description: 'heltgibgnbinjgnbjvnjginbivnn'
    },
    {
        name: 'Benadrly',
        dose: 'Ibuprofen Tablets, 200 mg',
        description: 'heltgibgnbinjgnbjvnjginbivnn'
    },
]

const RenderAppointment = () => {
    return (
        <View style={[styles.cardContainer, styles.shadow]}>
            <View style={{ padding: 10 }}>
                <Image
                    style={[styles.dentalImage]}
                    source={{ uri: 'https://i.pinimg.com/474x/ac/04/33/ac0433ef8ae9ab0f778cf10a11d1fb1a.jpg' }}
                />
                <Text style={[styles.cardTitle]}>
                    Chandmani
                </Text>
                <Text >
                    +976 99111233
                </Text>
            </View>
            <View style={[styles.scheduleButton, styles.center, styles.row]}>
                <TimeIcon />
                <Text style={{ color: 'white', marginLeft: 6 }}>
                    11:00 AM
                </Text>
            </View>
        </View>
    )
}


export const HomeScreen = () => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.lightTitle]}>
                Сайн уу
            </Text>
            <Text style={[styles.title, styles.marginBottom]}>
                Joma tech
            </Text>
            <View style={[styles.inputBox, styles.shadow, styles.row]}>
                <SearchIcon />
                <TextInput
                    style={{
                        fontSize: 16,
                        lineHeight: 20,
                        alignItems: 'center',
                        marginLeft: 11
                    }}
                    placeholder='эмнэлэг хайх'
                />
            </View>
            <Text style={[styles.title2, styles.marginBottom]}>
                Өнөөдрийн уулзалт
            </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={[{}]}
                renderItem={RenderAppointment}
                style={{
                    height: 162,
                    maxHeight: 200,
                }}
            />
            <Text style={[styles.title2, styles.marginBottom]}>
                Хугацаат үзлэг
            </Text>
            <View style={[styles.cardContainer2, styles.shadow]}>
                <Text style={{ marginBottom: 6 }}>
                    Та 6 сарын 15 ны өдөр үзлэгтэй тул ирж үзлэгт орно уу.
                </Text>
                <Text style={{ marginBottom: 6 }}>
                    Утас: +976 99111826
                </Text>
                <Text>
                    Хаяг:  11-р хороолол, Автоплаза төвийн баруун талд , Астра төвийн 1-р давхарт, Улаанбаатар
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#F5F7FB',
        padding: 21,
        height: '100%'
    },
    dentalImage: {
        width: 53,
        height: 53,
        borderRadius: 25,
    },
    row: {
        flexDirection: 'row',
    },
    lightTitle: {
        color: '#0D8CB9',
        fontWeight: '200',
        fontStyle: 'normal',
        fontSize: 30,
        lineHeight: 48,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#0D8CB9',
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 30,
        lineHeight: 48,
    },
    title2: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
    },
    marginBottom: {
        marginBottom: 16
    },
    cardContainer: {
        width: 159,
        height: 162,
        marginHorizontal: 9,
        borderRadius: 14,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContainer2: {
        padding: 15,
        height: 150,
        backgroundColor: '#F5F7FB',
        borderColor: 'white',
        borderWidth: 4,
        borderRadius: 14
    },
    scheduleButton: {
        width: 159,
        height: 34,
        backgroundColor: '#1EA6D6',
        borderBottomRightRadius: 14,
        borderBottomLeftRadius: 14,
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
    cardTitle: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 5,
    },
    inputBox: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        width: '100%',
        marginBottom: 40,
        height: 51,
        backgroundColor: '#F5F7FB',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: 'white',
        display: 'flex',
        alignItems: 'center'
    }
})