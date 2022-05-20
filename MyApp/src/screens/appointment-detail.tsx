import { fontSize, lineHeight } from "@mui/system";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

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

export const AppointmentDetailScreen = () => {
    return (
        <SafeAreaView style={[styles.container]}>
            <Text style={[styles.title]}>
                шуд цэвэрлэх
            </Text>
                                                                                                                                                                                                                                                                  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#F5F7FB',
        padding: 30,
        height: '100%'
    },
    title: {
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 30,
        lineHeight: 48,
        backgroundColor: 'black'
    }
})