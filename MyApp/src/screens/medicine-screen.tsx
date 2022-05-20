import React, { useState } from 'react'
import { View, FlatList, TextInput, StyleSheet } from 'react-native'
import { MedicineBox } from '../components'

const data = [
    {
        name: 'Адвил',
        dose: 'Хүүхэд 30мг, том хүн 50мг',
        description: 'Өглөө, өдөр хоол идэхээс 30минутын өмнө хоолны халбагаар өдөрт 2ш удаа '
    },
    {
        name: 'Туленол',
        dose: 'Хүүхэд 50мг, том хүн 75мг',
        description: 'Өглөө, өдөр, орой хоол идсэнээс 1цагийн дараа хоолны халбагаар өдөрт 3ш удаа, '
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
                    placeholder='Эмийн нэр'
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
        alignItems: 'center',
        backgroundColor: 'white'
    },

    input: {
        width: '90%',
        height: '100%',
    },

    inputCont: {
        width: '90%',
        height: 50,
        backgroundColor: '#F5F7FB',
        marginVertical: '5%',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center'
    }
})