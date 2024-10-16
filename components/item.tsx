import { StyleSheet, View, Text } from "react-native"

export const Item = ({nome, data, idade} : {nome: string, idade: string, data: string}) => {

    return (
        <>
            <View style={styles.itemList}>
                <Text>{nome}</Text>
                <Text>{idade}</Text>
                <Text>{data}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    itemList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4168a4d4",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,

        borderRadius: 15
    }
})