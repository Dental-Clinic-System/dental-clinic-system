import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { MedicineSvg } from './svg'

export const MedicineBox: React.FC<any> = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.line} />
            <View style={styles.innerContainer}>
                <MedicineSvg width={30} height={30} />
                <View>
                    <Text>{props.name}</Text>
                    <Text>{props.dose}</Text>
                </View>
                <TouchableOpacity>
                    <Text>Description</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
    },

    innerContainer: {
        width: '90%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    line: {
        width: '100%',
        height: 5,
        backgroundColor: '#F5F7FB',
        borderRadius: 1
    }
})