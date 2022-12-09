import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from './../../contexts/auth';
import Header from '../../components/Header';

export default function Profile() {

  const navigation = useNavigation()

  const { user, signOut } = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.name}>
        {user && user.name}
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Registrar')}
      >
        <Text style={styles.txtBtn}>Registrar gastos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: '#c62c36' }]}
        onPress={() => signOut()}
      >
        <Text style={styles.txtBtn}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',

  },
  name: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 25,
    marginTop: 25,
    color: '#fff'
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b94a',
    width: '90%',
    height: 45,
    borderRadius: 10,
    marginBottom: 10
  },
  txtBtn: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})