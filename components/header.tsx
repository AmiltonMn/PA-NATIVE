import { Image, ImageSourcePropType, StyleSheet, Text } from "react-native"
import { View } from "react-native"


export const Header = ({image} : {image: ImageSourcePropType}) => {

    return (
        <>
            <View style={style.background}>
                <Text style={style.textStyle}>Header Exemplos</Text>
                <Image source={image}/>
            </View>
        </>
    )
}

const style = StyleSheet.create({

    background: {
        backgroundColor: "#090909",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 30
    },

    textStyle: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "Inter"
    }
})