import React, { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Picker from '../../components/Picker';
import Header from './../../components/Header/index';

export default function New() {
  const [value, setValue] = useState('')
  const [type, setType] = useState('receita')

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

          <TouchableOpacity style={styles.btn}>
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