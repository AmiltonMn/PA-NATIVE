import { Link } from "expo-router";
import { View, Text } from "react-native";


export default function Register() {

    return (
        <>
            <Link href={'/'}>Voltar ao Login ⬅</Link>
            <View>
                <Text> Cadastro de Usuário </Text>
            </View>
        </>
    )
}