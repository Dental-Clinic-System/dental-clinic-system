import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CalendarPicker from 'react-native-calendar-picker';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { display, margin, padding } from "@mui/system";
import { useState } from "react";


const dummy = [
    {
        disabled: true,
        value: '6:20 AM'
    },
    {
        disabled: false,
        value: '7:00 AM'
    },
    {
        disabled: true,
        value: '8:10 AM'
    },
    {
        disabled: false,
        value: '9:40 AM'
    },
    {
        disabled: true,
        value: '10:30 AM'
    },
    {
        disabled: false,
        value: '11:40 AM'
    },
    {
        disabled: false,
        value: '2:00 PM'
    },
    {
        disabled: false,
        value: '3:00 PM'
    },
    {
        disabled: false,
        value: '4:40 PM'
    },
]

const RenderSchedule = ({ item, index, selectedSchedule, setSelectedSchedule }: any) => {
    return (
        <TouchableOpacity
            disabled={item.disabled}
            style={[styles.schedule, item.disabled == true ? styles.disabledSchedule : (selectedSchedule == index && styles.selectedSchedule)]}
            onPress={() => setSelectedSchedule(index)}
        >
            <Text
                style={[item.disabled == true ? { color: '#B4B4B4' } : (selectedSchedule == index ? { color: 'white' } : { color: '#1EA6D6' })]}
            >
                {item.value}
            </Text>
        </TouchableOpacity>
    )
}

export const getAppointment = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const [selectedSchedule, setSelectedSchedule] = useState(null)
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.scheduleContainer]}>
                <Text style={[styles.title]}>
                    {monthNames[month]} {year}
                </Text>
                <Text>
                    Mo      Tu      We      Th      Fr      Sa      Su
                </Text>
                <CalendarPicker
                    headerWrapperStyle={{ display: 'none', }}
                    dayLabelsWrapper={{ display: 'none', }}
                    width={324}
                    height={300}
                    dayShape='square'
                    selectedDayStyle={{
                        backgroundColor: "#1EA6D6",
                        width: 22,
                        height: 22,
                        borderRadius: 2,
                    }}  
                    selectedDayTextStyle={{ color: 'white' }}
                    textStyle={{ fontSize: 16 }}
                    onDateChange={(e) => console.log(e)}
                />
                <Text style={[styles.title]}>
                    Available Times
                </Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={dummy}
                    renderItem={(params) =>
                        <RenderSchedule
                            {...params}
                            selectedSchedule={selectedSchedule}
                            setSelectedSchedule={setSelectedSchedule}
                        />
                    }
                />
                <TouchableOpacity style={[styles.button]}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Schedule
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F5F7FB',
        height: '100%'
    },
    scheduleContainer: {
        paddingHorizontal: 16,
        width: 324,
        height: 500,
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F5F7FB',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    schedule: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 95,
        height: 28,
        borderRadius: 4,
        borderColor: '#1EA6D6',
        borderWidth: 1,
        marginRight: 3,
    },
    disabledSchedule: {
        borderColor: '#B4B4B4'!,
    },
    selectedSchedule: {
        borderColor: '#1EA6D6'!,
        backgroundColor: '#1EA6D6'!,
        color: 'white'!
    },
    title: {
        lineHeight: 36,
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 12,
        marginTop: 22
    },
    button: {
        width: 316,
        height: 60,
        backgroundColor: '#1EA6D6',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})