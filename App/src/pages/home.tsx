import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth'

export const Home = ({ navigation }: any) => {
    const SignOut = () => {
        auth().signOut()
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView>
            <Text>
                home
            </Text>
            <TouchableOpacity onPress={SignOut}>
                <Text>
                    signout
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Clinics')}>
                <Text>
                    clinics
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}