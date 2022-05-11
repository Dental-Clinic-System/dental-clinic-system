import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useLazyQuery } from "@apollo/client";
import { FIND_PATIENT } from '../graphql/queries';
import auth from '@react-native-firebase/auth'

const Login = ({ navigation }: any) => {
    const [number, setNumber] = useState('')
    const [login] = useLazyQuery(FIND_PATIENT)
    const [step, setStep] = useState(1)
    const [confirmation, setConfirmation] = useState<any>()
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const Sendcode = async () => {
        setError('')
        if (number) {
            const { data } = await login({
                variables: {
                    mobileNumber: number
                }
            })
            console.log(data)
            if (data?.findPatient) {
                const confirm = await auth().signInWithPhoneNumber(`+976${number}`)
                setConfirmation(confirm)
                setStep(2)
            } else {
                setError('ta manai hereglegch bish bna')
            }
        } else {
            setError('dugaaraa oruulnuu')
        }
    }
    const ConfirmCode = async () => {
        confirmation.confirm(code).then(() => {
            navigation.navigate("Home")
        }).catch((error: any) => {
            console.log(error)
            if (error = '[Error: [auth/code-expired] The SMS code has expired. Please re-send the verification code to try again.]') {
                setError('sms code buruu baina')
            }
        });
    }
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={[styles.container]}>
                {
                    step == 1 ?
                        <TextInput style={[styles.input]} value={number} onChangeText={setNumber} placeholder='number' />
                        :
                        <TextInput style={[styles.input]} value={code} onChangeText={setCode} placeholder='confirmation code' />
                }
                {
                    step == 1 ?
                        <TouchableOpacity style={[styles.button]} onPress={Sendcode}>
                            <Text style={[styles.text]}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={[styles.button]} onPress={ConfirmCode}>
                            <Text style={[styles.text]}>
                                confirm
                            </Text>
                        </TouchableOpacity>
                }
                <Text>
                    {error}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        padding: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        height: 50,
        margin: 15
    },
    button: {
        borderRadius: 10,
        height: 50,
        width: '40%',
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
})
export default Login;
