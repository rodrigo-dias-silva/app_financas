import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'

import { AuthContext } from '../../contexts/auth'
import Header from './../../components/Header';
import List from '../../components/List';

export default function Home() {

  const [historico, setHistorico] = useState([
    { key: '1', type: 'receita', value: 1200 },
    { key: '2', type: 'despesa', value: 200 },
    { key: '3', type: 'despesa', value: 1000 },
    { key: '4', type: 'receita', value: 1200 },
    { key: '5', type: 'receita', value: 200 },
    { key: '6', type: 'receita', value: 100 },
    { key: '7', type: 'despesa', value: 600 },
    { key: '8', type: 'receita', value: 10 },
    { key: '9', type: 'despesa', value: 10 },
    { key: '10', type: 'receita', value: 10 },
    { key: '11', type: 'despesa', value: 10 },
    { key: '12', type: 'despesa', value: 110 },
  ])

  const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>

        <Header />
        <View style={styles.containerUser}>
          <Text style={styles.name}>{user && user.name}</Text>
          <Text style={styles.cash}>R$ 123,00</Text>
        </View>
        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={historico}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (<List data={item} />)}
          style={styles.list}
        />

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
    width: '90%',
    height: '100%'
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
  },
  list: {
    paddingTop: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
})