import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './../../contexts/auth';
import { Feather } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secury, setSecury] = useState(true);

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password)
  }

  return (
    <View style={styles.bg}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              secureTextEntry={secury}
            />
            <TouchableOpacity
              style={styles.btnSecury}
              onPress={() => setSecury(!secury)}
            >
              <Text style={styles.txtSecury}>{secury ? (<Feather name='eye' size={20} />) : (<Feather name='eye-off' size={20} />)}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={handleLogin}
          >
            {
              loadingAuth ?
                (<ActivityIndicator size={20} color="#fff" />)
                :
                (<Text style={styles.textBtn}>Entrar</Text>)
            }
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.textLink}>Criar uma conta</Text>
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
  },
  img: {
    marginBottom: 30
  },
  areaInput: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff33",
    borderRadius: 8,
    width: "90%",
    height: 45,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    padding: 10,
    height: 45
  },
  btnSecury: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    marginRight: 8,
    height: 45,
  },
  txtSecury: {
    color: '#bcbcbc'
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