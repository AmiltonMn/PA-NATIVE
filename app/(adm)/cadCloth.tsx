import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabTwoScreen() {

    const addCloth = () => {

    }

    return (
        <View style={styles.mainView} >
            <Text style={styles.pageTitle} >Cadastro de Roupas</Text>

            <View style={styles.cadView}>
                <TouchableOpacity style={styles.button} onPress={addCloth}>
                    <Text style={styles.bttnText}>Logar</Text>
                </TouchableOpacity>
            </View>
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
        marginTop: 30
    },

    mainView: {
        height: '100%',
    },


    // Estilos do cadastro
    button: {
        display: 'flex',
        backgroundColor: "#5F1616FF",
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bttnText: {
        color: '#ffffff'
    },

    cadView: {
        
    }
});
