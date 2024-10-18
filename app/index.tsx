import { Link, router } from "expo-router";
import { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, SafeAreaView, StyleSheet, Easing } from "react-native";
import { Image, ImageSource } from "expo-image"
import Logo from "@/assets/images/SpotifyLogo.png"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


export default function Login() {

    const sv = useSharedValue(10)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    var [borderBottomColor, setBorderColorLogin] = useState('')

    console.log(email, pass)
    console.log(typeof email, typeof pass)

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1)
    }

    const style = useAnimatedStyle(() => {
        return {
            borderWidth: withTiming(sv.value, config),
            color: 'red'
        };
    });

    const onPress = () => {
        router.push('/(tabs)')
    }

    return (
        <>
            <SafeAreaView style={styles.pageStyle}>
                
                <Image source={Logo} style={styles.imageStyle}></Image>
                <View style={styles.buttons}>
                    <View style={[styles.loginBttn, style]}>
                        <Animated.View style={{
                            borderBottomColor,
                        }} />
                        <Text style={styles.whiteText} onPress={() => {
                            sv.value = sv.value + 20;
                        }}>Log In</Text>
                        
                    </View>

                    <View style={styles.regButton}>
                        <Text style={styles.whiteText}>Register</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.bttnText}>Logar</Text>
                    </TouchableOpacity>
                    <Link href={'/register'}>
                        Cadastrar novo usuário!
                    </Link>
                </View>

            </SafeAreaView >
        </>
    )
}

const styles = StyleSheet.create({

    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "#090909",
        width: '100%',
        color: 'white'
    },

    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 50,
    },

    loginBttn: {
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        borderBottomColor: '#ff0000',
        borderWidth: 1,
        padding: 5
    },

    regButton: {
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        borderWidth: 1,
        padding: 5
    },

    button: {
        backgroundColor: "#090909",
        marginTop: 10
    },

    whiteText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    bttnText: {
        color: "white",
        display: "flex",
        justifyContent: 'center'
    },

    pageStyle: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#090909",
        flex: 1
    },

    imageStyle: {
        width: 200,
        height: 150,
        resizeMode: 'contain'
    },
})