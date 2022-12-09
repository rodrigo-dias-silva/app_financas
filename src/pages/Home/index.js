import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth'
import Header from './../../components/Header';

export default function Home() {

  const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>

        <Header />
        <View style={styles.containerUser}>
          <Text style={styles.name}>Rodrigo</Text>
          <Text style={styles.cash}>R$ 123,00</Text>
        </View>
        <Text style={styles.title}>Últimas movimentações</Text>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center'
  },
  container: {
    width: '90%'
  },
  containerUser: {
    marginBottom: 25
  },
  name: {
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic'
  },
  cash: {
    marginTop: 5,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  title: {
    color: '#00b94a',
    marginBottom: 10
  }
})