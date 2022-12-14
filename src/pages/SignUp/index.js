import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

export default function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext)

  function handleSingUp() {
    signUp(email, password, name)
  }

  return (
    <View style={styles.bg}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
        >
          <Text style={styles.title}>Crie sua conta</Text>
          <View style={styles.areaInput}>
            <TextInput
              placeholderTextColor="#ffffff66"
              style={styles.input}
              placeholder='Nome'
              autoCorrect={false}
              autoCapitalize='none'
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.areaInput}>
            <TextInput
              placeholderTextColor="#ffffff66"
              style={styles.input}
              placeholder='E-mail'
              autoCorrect={false}
              autoCapitalize='none'
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.areaInput}>
            <TextInput
              placeholderTextColor="#ffffff66"
              style={styles.input}
              placeholder='Senha'
              autoCorrect={false}
              autoCapitalize='none'
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <TouchableOpacity style={styles.btn} onPress={handleSingUp}>
            {
              loadingAuth ?
                (<ActivityIndicator size={20} color="#fff" />)
                :
                (<Text style={styles.textBtn}>Cadastrar</Text>)
            }
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#131313",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30
  },
  img: {
    marginBottom: 30
  },
  areaInput: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#ffffff33",
    width: "90%",
    fontSize: 16,
    color: "#fff",
    marginBottom: 15,
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
    marginTop: 10,
  },
  textBtn: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 'bold'
  },
  link: {
    marginTop: 10,
    marginBottom: 15,
  },
  textLink: {
    color: "#fff",
  },
})