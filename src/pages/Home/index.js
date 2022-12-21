import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../contexts/auth'
import Header from './../../components/Header';
import List from '../../components/List';
import firebase from './../../services/firebaseConnection';
import { format } from 'date-fns';

export default function Home() {

  const [historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0)

  const { user } = useContext(AuthContext);
  const uid = user && user.uid

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo)
      })

      await firebase.database().ref('historico')
        .child(uid)
        .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
        .limitToLast(10).on('value', (snapshot) => {
          setHistorico([])

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              type: childItem.val().type,
              value: childItem.val().value,
              date: childItem.val().date
            }

            setHistorico(oldArray => [...oldArray, list].reverse())
          })
        })
    }

    loadList();

  }, [])

  function handleDelete(data) {

    Alert.alert(
      'Cuidado Atenção!',
      `Você deseja excluir ${data.type} - Valor: ${data.value}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Excluir',
          onPress: () => handleDelSuccess(data)
        }
      ]
    )
  }

  async function handleDelSuccess(data) {
    await firebase.database().ref('historico').child(uid).child(data.key).remove()
      .then(() => {
        let saldoAtual = saldo

        data.type === 'despesa' ? saldoAtual += parseFloat(data.value) : saldoAtual -= parseFloat(data.value)

        firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>

        <Header />
        <View style={styles.containerUser}>
          <Text style={styles.name}>{user && user.name}</Text>
          <Text style={styles.cash}>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
        </View>
        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={historico}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (<List data={item} deleteItem={handleDelete} />)}
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