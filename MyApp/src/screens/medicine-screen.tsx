import React, { useState } from 'react'
import { View, FlatList, TextInput, StyleSheet } from 'react-native'
import { MedicineBox } from '../components'

const data = [
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
]

export const MedicineScreen = () => {
    const [medicineName, setMedicineName] = useState('')
    const [medicineArr, setMedicineArr] = useState(data)

    const filterArr = (text: any) => {
        setMedicineName(text)

        let newArray = data.filter((medicine) =>
            medicine.name.toLowerCase().includes(text.toLowerCase())
        );

        setMedicineArr(newArray)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputCont}>
                <TextInput style={styles.input}
                    placeholder='Search here'
                    value={medicineName}
                    onChangeText={(text) => filterArr(text)}
                />
            </View>

            <FlatList
                style={{ width: '100%', height: '100%' }}
                data={medicineArr}
                renderItem={({ item }) => <MedicineBox {...item} />}
                horizontal={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },

    input: {
        width: '90%',
        height: '100%',
    },

    inputCont: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        marginVertical: '5%',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center'
    }
})