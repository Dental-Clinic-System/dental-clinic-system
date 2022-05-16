import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth'

export const Home = ({ navigation }: any) => {
    const SignOut = () => {
        auth().signOut()
        navigation.navigate('Login')
    }
    console.log(auth().currentUser)
    return (
        <SafeAreaView>
            <Text>
                home
            </Text>
            {
                auth().currentUser == null ?
                    <TouchableOpacity onPress={SignOut}>
                        <Text>
                            login
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={SignOut}>
                        <Text>
                            signout
                        </Text>
                    </TouchableOpacity>
            }
            <TouchableOpacity onPress={() => navigation.navigate('Clinics')}>
                <Text>
                    clinics
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Appointment')}>
                <Text>
                    appointment
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}