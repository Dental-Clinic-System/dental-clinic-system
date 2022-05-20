import React, { useState } from 'react'
import { Text, View, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import { ArrowSvg } from './svg'
import MedicationSvg from './svg/medication-svg'

export const MedicineBox: React.FC<any> = (props) => {
    const [open, setOpen] = useState(false)
    const height = new Animated.Value(0)

    const containerHeight = height.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 170]
    });

    const descriptionHeight = height.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 70]
    });

    const showDescription = async () => {
        open ? Animated.timing(height, {
            toValue: 1,
            duration: 300,
            useNativeDriver: false
        }).start(() => setOpen(!open))
            : Animated.timing(height, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start(() => setOpen(!open))
    }

    return (
        <Animated.View style={[styles.container, { height: containerHeight }]}>
            <View style={styles.line} />
            <View style={styles.innerContainer}>
                <MedicationSvg />
                <View>
                    <Text style={{ fontSize: 18 }}>{props.name}</Text>
                    <Text style={{ fontSize: 12, marginTop: 5 }}>{props.dose}</Text>
                </View>
                <TouchableOpacity style={styles.touchable} onPress={showDescription}>
                    <Text style={{ color: '#1EA6D6' }}>Дэлгэрэнгүй</Text>
                    <ArrowSvg />
                </TouchableOpacity>
            </View>

            <Animated.View style={[styles.descriptionBox, { height: descriptionHeight }]}>
                <View style={styles.line} />
                <View style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: '60%', width: '80%' }}>
                        <Text>{props.description}</Text>
                    </View>
                </View>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5F7FB',
        borderRadius: 5,
        marginBottom: 10,
    },

    descriptionBox: {
        width: '100%',
    },

    touchable: {
        width: 110,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    innerContainer: {
        width: '90%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    line: {
        width: '100%',
        height: 5,
        backgroundColor: 'white',
        borderRadius: 1
    }
})