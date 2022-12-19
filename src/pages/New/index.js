import React, { useContext, useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { format } from 'date-fns';

import Picker from '../../components/Picker';
import Header from './../../components/Header';

import firebase from './../../services/firebaseConnection';
import { AuthContext } from './../../contexts/auth';

export default function New() {
  const navigation = useNavigation()

  const [value, setValue] = useState('')
  const [type, setType] = useState('Receita')

  const { user: usuario } = useContext(AuthContext)

  function handleSubmit() {
    Keyboard.dismiss()
    if (isNaN(parseFloat(value)) || type === null) {
      alert('Preencha todos os campos!')
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${type} - Valor: ${parseFloat(value)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd() {
    let uid = usuario.uid

    let key = firebase.database().ref('historico').child(uid).push().key;

    firebase.database().ref('historico').child(uid).child(key).set({
      type: type,
      value: parseFloat(value),
      date: format(new Date(), 'dd/MM/yy')
    })

    let user = firebase.database().ref('users').child(uid);

    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo)

      type === 'despesa' ? saldo -= parseFloat(value) : saldo += parseFloat(value)

      user.child('saldo').set(saldo)
    })
    Keyboard.dismiss()
    setValue('')
    navigation.navigate('Home')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.bg}>
        <Header />

        <View style={styles.container}>
          <TextInput
            placeholderTextColor={'#ffffff66'}
            style={styles.input}
            placeholder='Valor desejado'
            keyboardType='numeric'
            returnKeyType='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(text) => setValue(text)}
          />

          <Picker onChange={setType} tipo={type} />

          <TouchableOpacity
            style={styles.btn}
            onPress={handleSubmit}
          >
            <Text style={styles.txtBtn}>Registrar</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center'
  },
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center'
  },
  input: {
    backgroundColor: "#ffffff33",
    width: "90%",
    height: 45,
    fontSize: 16,
    color: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00b94a",
    width: "90%",
    height: 45,
    borderRadius: 8,
    marginTop: 20,
  },
  txtBtn: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 'bold'
  },
})