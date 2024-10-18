import { StyleSheet, View, Text } from "react-native"
import { Image, ImageSource } from "expo-image"

export const Item = ({nome, data, idade, image} : {nome: string, idade: string, data: string, image: string}) => {

    return (
        <>
            <View style={styles.itemList}>
                <Image source={image} style={styles.imageStyle}></Image>
                <Text style={styles.textOutfit}>{nome}</Text>
                <Text style={styles.text}>{idade}</Text>
                <Text style={styles.textOutfit}>{data}</Text>
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
        backgroundColor: "#000000D4",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,

        borderRadius: 15
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    text: {
        color: "white"
    },
    textOutfit: {
        fontFamily: "Outfit",
        color: "white"
    }
})