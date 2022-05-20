import React from "react";
import { Animated, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { ArrowSvg } from "./svg";

export const RenderAppointment = ({ item }: any) => {
    //@ts-ignore
    const month = item.startDate.slice(3, 5)
    const year = item.startDate.slice(6, 10)
    const height = new Animated.Value(0)
    let open = false

    const containerHeight = height.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200]
    });

    const descriptionHeight = height.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100]
    });

    const showDescription = async () => {
        open ? Animated.timing(height, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false
        }).start(() => open = !open)
            : Animated.timing(height, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start(() => open = !open)
    }

    return (
        <Animated.View style={[styles.cardContainer, { height: containerHeight }]}>
            <View style={{ width: '90%', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ marginRight: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 50 }}>
                    <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.startMonth}</Text>
                    <Text style={{ fontSize: 24, fontWeight: '600' }}>{month}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '600' }}>{year}</Text>
                </View>
                <View style={{ width: 250, }}>
                    <Text style={[styles.cardTitle]}>
                        {item.title}
                    </Text>
                    <Text style={[styles.cardTitle]}>
                        {item.doctor}
                    </Text>
                </View>
                <TouchableOpacity onPress={showDescription}>
                    <ArrowSvg />
                </TouchableOpacity>
            </View>
            <Animated.View style={[{ width: '100%', height: descriptionHeight, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }]}>
                <View style={styles.line} />
                <View style={{ marginLeft: 24 }}>
                    <Text>Тэмдэглэл: {item.notes}</Text>
                </View>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#F5F7FB',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    line: {
        width: '100%',
        height: 4,
        backgroundColor: 'white',
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

    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
    },

    cardTitle: {
        fontWeight: '500',
        fontSize: 16,
    },

    scheduleBox: {
        padding: 2,
    }
})