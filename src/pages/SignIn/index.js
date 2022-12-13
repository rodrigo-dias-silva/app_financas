import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password)
  }

  return (
    <View style={styles.bg}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Image style={styles.img} source={require('../../images/Logo.png')} />
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

        <TouchableOpacity
          style={styles.btn}
          onPress={handleLogin}
        >
          <Text style={styles.textBtn}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.textLink}>Criar uma conta</Text>
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
    height: 45
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
  txtBtn: {
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