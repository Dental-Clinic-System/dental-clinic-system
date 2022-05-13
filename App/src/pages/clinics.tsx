import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const renderClinic = ({ item }: any) => {
    return (
        <View style={[styles.cardContainer]}>
            <Text>
                эмнэлэг: {item.title}
            </Text>
            <Text>
                утасны дугаар: {item.contact_number}
            </Text>
        </View>
    )
}

export const Clinics = () => {
    const [clinics, setClinics] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                    query GetClinic {
                    getClinics {
                        title
                        _id
                        address
                        district
                        khoroo
                        status
                        email
                        contact_number
                    }
                }`,
            })
        })
            .then((response) => response.json())
            .then(({ data: { getClinics } }) => {
                setClinics(getClinics)
            })
    }, [])
    return (
        <SafeAreaView>
            <View style={[styles.listContainer, styles.margin]}>
                <Text>эмнэлгүүд</Text>
            </View>
            <View style={styles.listContainer}>
                <FlatList data={clinics} renderItem={renderClinic} style={{ width: '80%' }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    cardContainer: {
        margin: 10,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
    },
    margin: {
        margin: 15,
    }
})
