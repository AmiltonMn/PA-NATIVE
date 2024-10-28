import { useState, useEffect } from "react";
import { Link, router, useNavigation } from "expo-router";
import { View, TouchableOpacity, Text, TextInput, SafeAreaView, StyleSheet, Easing, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Image, ImageSource } from "expo-image"
import { FIREBASE_AUTH } from "@/firebaseConfig";
import Logo from "@/assets/images/SpotifyLogo.png"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";


export default function Login() {

    const sv = useSharedValue(10)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    var [borderBottomColor, setBorderColorLogin] = useState('')

    const auth = FIREBASE_AUTH;

    useEffect(() => {
        console.log(auth.currentUser)
    }, [auth.currentUser]);

    useEffect(() => {
        console.log(email, pass)
    }, [email, pass]);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1)
    };

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((dadosUsuario) => {
            console.log(dadosUsuario);
            router.push('/(tabs)')
        }).catch((err) => {
            alert(err.message);
        });
    }

    return (
        <>
            <SafeAreaView style={styles.pageStyle}>
                
                <Image source={Logo} style={styles.imageStyle}></Image>
                <View style={styles.buttons}>
                    <View style={[styles.loginBttn]}>
                        <Animated.View style={{
                            borderBottomColor,
                        }} />
                        <Text style={styles.whiteText} onPress={() => {
                            sv.value = sv.value + 20;
                        }}>Log In</Text>
                        
                    </View>

                    <View style={styles.regButton}>
                        <Link href={'/register'}  style={styles.whiteText}>
                            Register
                        </Link>
                    </View>
                </View>

                <View style={styles.inputs}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}        
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={setPass}
                        value={pass}
                        
                    />
                    <TouchableOpacity style={styles.button} onPress={signIn}>
                        <Text style={styles.bttnText}>Logar</Text>
                    </TouchableOpacity>
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
        marginBottom: 10,
        borderColor: "#04b507",
        borderWidth: 2,
        borderRadius: 50,
        width: '100%',
        color: 'white'
    },

    inputs: {
        marginTop: 50
    },  

    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 50,
    },

    loginBttn: {
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        borderBottomColor: '#04b507',
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