import { useState, useEffect } from "react";
import { Link, router } from "expo-router";
import { View, TouchableOpacity, Text, TextInput, SafeAreaView, StyleSheet, Easing, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Image } from "expo-image"
import { FIREBASE_AUTH } from "@/firebaseConfig";
import Logo from "@/assets/images/SpotifyLogo.png"


export default function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    var [focused, setFocused] = useState(true)

    state: {
        isFocused: true
    }

    const auth = FIREBASE_AUTH;

    useEffect(() => {
        console.log(auth.currentUser)
    }, [auth.currentUser]);

    useEffect(() => {
        console.log(email, pass)
    }, [email, pass]);

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((dadosUsuario) => {
            console.log(dadosUsuario);
            if (email == "admin@adm.adm" && pass == "adm1234") {
                router.push('/(adm)')
            } else {
                router.push('/(loja)')
            }
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
                        <Text style={styles.whiteText}>Log In</Text>
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
                        placeholder="Digiteu seu E-mail"
                        placeholderTextColor="#929394"
                        onFocus={() => setFocused(true)}
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={setPass}
                        value={pass}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#929394"
                        secureTextEntry
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
        color: 'white',
            
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