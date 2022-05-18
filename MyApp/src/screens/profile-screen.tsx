import { height } from '@mui/system'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import PhoneIcon from '../components/svg/phone-svg'
import MessegeIcon from './messege-svg'


const dummy = [
    '23 April',
    '20 April',
    '13 April',
    '29 Mar',
]

const RenderCompletedAppointments = ({ item }: any) => {
    return (
        <View style={[styles.cardContainer]}>
            <Text style={{ color: '#1EA6D6' }}>
                Meeting on {item}
            </Text>
        </View>
    )
}

export const ProfileScreen = () => {
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.containerPadding]}>
                <View style={[styles.flex, styles.spaceBetween]}>
                    <Image
                        style={[styles.profileImage]}
                        source={{
                            uri: 'https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s900-c-k-c0x00ffffff-no-rj'
                        }}
                    />
                    <View style={[styles.flex]}>
                        <TouchableOpacity style={[styles.icon, styles.lowShadow]}>
                            <PhoneIcon />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.icon, styles.lowShadow]}>
                            <MessegeIcon />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={[styles.flex, styles.marginTop]}>
                        <Text style={[styles.userField]}>Name:</Text>
                        <Text style={[styles.userValue]}>Joma Tech</Text>
                    </View>
                    <View style={[styles.flex, styles.marginTop]}>
                        <Text style={[styles.userField]}>Gender:</Text>
                        <Text style={[styles.userValue]}>Male</Text>
                    </View>
                    <View style={[styles.flex, styles.marginTop]}>
                        <Text style={[styles.userField]}>Age:</Text>
                        <Text style={[styles.userValue]}>32</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.line, styles.lowShadow, styles.marginTop]} />
            <View style={[styles.containerPadding]}>
                <Text style={[styles.title, styles.MarginBottom]}>
                    Completed Appointments
                </Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dummy}
                    renderItem={RenderCompletedAppointments}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    flex: {
        display: 'flex',
        flexDirection: 'row'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    container: {
        height: '100%',
        backgroundColor: '#F5F7FB',
    },
    containerPadding: {
        paddingTop: 20,
        paddingHorizontal: 40,
    },
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 15
    },
    icon: {
        width: 57,
        height: 57,
    },
    lowShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 9.11,
    },
    marginTop: {
        marginTop: 27,
    },
    MarginBottom: {
        marginBottom: 11,
    },
    userField: {
        width: 70,
        fontSize: 16
    },
    userValue: {
        color: '#135064',
        opacity: 70,
        fontSize: 16
    },
    line: {
        width: '100%',
        backgroundColor: '#F5F7FB',
        height: 5,
    },
    title: {
        color: '#1EA6D6',
        fontSize: 15,
        lineHeight: 22,
        fontWeight: '500',
        fontStyle: 'normal',
    },
    cardContainer: {
        paddingHorizontal: 19,
        paddingVertical: 7,
        width: 232,
        height: 32,
        backgroundColor: 'rgba(30, 166, 214, 0.15)',
        marginBottom: 11,
        borderRadius: 3,
    }

})