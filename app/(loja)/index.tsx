import { FIRESTORE_DB } from '@/firebaseConfig';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

interface User {
  id: string,
  name: string
}

export default function HomeScreen() {

  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(FIRESTORE_DB, "usuario"), (snapshot) => {
        const userList: User[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
        setUsers(userList);
    });

    return () => unsubscribe();
  }, []);

  const addUser = async () => {
    if (newUser === "") {
        Alert.alert("Por favor, insira um nome.");
        return;
    }
    await addDoc(collection(FIRESTORE_DB, "usuario"), { name: newUser });
    setNewUser('');
  };

  const deleteUser = async (id: string) => {
    await deleteDoc(doc(FIRESTORE_DB, "usuario", id))
  };


  const updateUser = async (id: string) => {
    if (newUser === "") {
        Alert.alert("Por favor, insira um novo nome para o usuário.");
        return;
    }

    const userRef = doc(FIRESTORE_DB, "usuario", id);

    await updateDoc(userRef, {
        name: newUser,
    });

    setNewUser('');
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.pageTitle}>CRUD</Text>
      <TextInput
          style={styles.input}
          placeholder="Novo Usuário"
          value={newUser}
          onChangeText={setNewUser}
      />
      <TouchableOpacity style={styles.button} onPress={addUser}>
          <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <TouchableOpacity onPress={() => deleteUser(item.id)}>
                  <Text style={styles.deleteButton}>Excluir</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateUser(item.id)}>
                  <Text style={styles.deleteButton}>Atualizar</Text>
              </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  mainView: {
    overflow: 'visible',
    padding: 10
  },
  
  flatlist: {
    overflow: 'scroll'
  },
  
  pageTitle: {
    display: 'flex',
    justifyContent: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#4b6beb',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
  },

  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    overflow: 'scroll',
    gap: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  deleteButton: {
    color: "#ff0000"
  },

});
