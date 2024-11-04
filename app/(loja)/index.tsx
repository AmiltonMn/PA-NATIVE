import { FIRESTORE_DB } from '@/firebaseConfig';
import { addDoc, collection, deleteDoc, doc, Firestore, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Image } from "expo-image"
import placeholderImage from "@/assets/images/placeholderImage.png"
import home from "@/assets/images/homeIco.png"
import { router } from 'expo-router';

interface Cloth {
  id: string,
  nome: string,
  estoque: number,
  tamanho: number,
  valor: number
}

export default function HomeScreen() {

  const [roupas, setRoupas] = useState<Cloth[]>([]) 

  useEffect(() => {
        const unsubscribe = onSnapshot(collection(FIRESTORE_DB, "Roupas"), (snapshot) => {
        const clothList: Cloth[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Cloth[];
        setRoupas(clothList);
    });

    return () => unsubscribe();
  }, []);

  const logOff = () => {
    router.push('/register')
}

  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.titleView} onPress={logOff}>
        <Image source={home} style={styles.imageStyle}></Image>
      </TouchableOpacity>

      <FlatList
        data={roupas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clothDesc}>
            <Image source={placeholderImage} style={styles.imageStyle}></Image>
            <View style={styles.cloth}>
              <Text>{item.nome}</Text>
              <Text>R${item.valor}</Text>
              <Text>Tamanho: {item.tamanho}</Text>
              <Text>Quantidade: {item.estoque}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  imageStyle: {
    width: 200,
    height: 150,
    resizeMode: 'contain'
  },

  mainView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50
  },

  cloth: {
    left: 3
  },

  clothDesc: {
    marginBottom: 20
  },

  titleView: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    top: 0,
    marginTop: 10
  },

});
