import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { Link, router } from "expo-router";
import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Image } from "expo-image"
import home from "@/assets/images/homeIco.png"

export default function TabTwoScreen() {

    const [modalVisible, setModalVisible] = useState(false);
    const [message, setMessage] = useState("")
    const [estoque, setEstoque] = useState("")
    const [valor, setValor] = useState("")
    const [tamanho, setTamanho] = useState("")
    const [name, setName] = useState("")

    const db = getFirestore()

    const addCloth = async () => {

        if (!estoque || !valor || !tamanho || !name) {
            setMessage("Insira os dados corretamente")
            setModalVisible(true);
            return
        }

        const estoqueNum = parseInt(estoque)
        const valorNum = parseInt(valor)
        const tamanhoNum = parseInt(tamanho)

        if (!Number.isInteger(valorNum) || !Number.isInteger(estoqueNum) || !Number.isInteger(tamanhoNum)) {
            setMessage("Os valores \"Estoque, Valor e Tamanho\" precisam ser números!")
            setModalVisible(true);
            return
        }

        try {
            await addDoc(collection(db, "Roupas"), {
                estoque: parseInt(estoque),
                nome: name,
                tamanho: tamanho,
                valor: valor
            })

            setMessage('Roupa cadastrada com sucesso!')
            setModalVisible(true);
        } catch (error) {
            console.error('Erro ao adicionar documento: ', error);
            setMessage('Ocorreu um erro ao cadastrar a roupa!')
            setModalVisible(true);
        }
    }

    const logOff = () => {
        router.push('/register')
    }

    return (
        <View style={styles.mainView}>

            <TouchableOpacity style={styles.titleView} onPress={logOff}>
                <Image source={home} style={styles.imageStyle}></Image>
            </TouchableOpacity>


            <View style={{
                display: 'flex', flex: 1, justifyContent: 'center'
            }}>

                <Text style={styles.pageTitle} >Cadastro de Roupas</Text>

                <View style={styles.cadView}>

                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder='Digite o Nome'
                        placeholderTextColor="#929394"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={setEstoque}
                        value={estoque}
                        placeholder='Quantidade em Estoque'
                        placeholderTextColor="#929394"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={setValor}
                        value={valor}
                        placeholder='Valor da Peça'
                        placeholderTextColor="#929394"
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={setTamanho}
                        value={tamanho}
                        placeholder='Tamanho'
                        placeholderTextColor="#929394"
                    />

                    <TouchableOpacity style={styles.button} onPress={addCloth}>
                        <Text style={styles.bttnText}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{message}</Text>
                        <Pressable
                            style={[styles.button, styles.closeButton]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        </View>
    );
}
 
const styles = StyleSheet.create({
  
    pageTitle: {
        display: 'flex',
        color: "#CA1F1FFF",
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    titleView: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        top: 0,
        marginTop: 10
    },

    mainView: {
        height: '100%',
        display: 'flex',
        backgroundColor: "#FFFFFFFF"
    },

    input: {
        borderColor: "#00ff00",
        borderWidth: 1,
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },


    // Estilos do cadastro
    button: {
        display: 'flex',
        backgroundColor: "#5F1616FF",
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999
    },

    bttnText: {
        color: '#ffffff'
    },

    cadView: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        gap: 20
    },

    // Styles do modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    closeButton: {
        backgroundColor: "#FFFFFF00"
    },

    imageStyle: {
        width: 30,
        height: 50,
        resizeMode: 'contain'
    },
});
