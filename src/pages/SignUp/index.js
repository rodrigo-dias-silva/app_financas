import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

export default function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.bg}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

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

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Cadastrar</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
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
    color: "#131313",
  },
  link: {
    marginTop: 10,
    marginBottom: 15,
  },
  textLink: {
    color: "#fff",
  },
})