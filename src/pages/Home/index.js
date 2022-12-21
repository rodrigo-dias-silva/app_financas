import { Alert, FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Foundation } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth'
import Header from './../../components/Header';
import List from '../../components/List';
import firebase from './../../services/firebaseConnection';
import { format } from 'date-fns';
import DatePicker from '../../components/DatePicker';

export default function Home() {

  const [historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0)
  const [show, setShow] = useState(false)

  const [newDate, setNewDate] = useState(new Date())

  const { user } = useContext(AuthContext);
  const uid = user && user.uid

  useEffect(() => {
    function loadList() {
      firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo)
      })

      firebase.database().ref('historico')
        .child(uid)
        .orderByChild('date').equalTo(format(newDate, 'dd/MM/yy'))
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

  }, [newDate])

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

  function handleShowPicker() {
    setShow(true)
  }

  function handleClose() {
    setShow(false)
  }

  function dateChange(date) {
    setShow(Platform.OS === 'ios')
    setNewDate(date)
  }

  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>

        <Header />
        <View style={styles.containerUser}>
          <Text style={styles.name}>{user && user.name}</Text>
          <Text style={styles.cash}>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
        </View>

        <View style={styles.containerFilter}>
          <TouchableOpacity style={styles.btnFilter} onPress={handleShowPicker}>
            <Foundation name='calendar' color='#fff' size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>Últimas movimentações</Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={historico}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (<List data={item} deleteItem={handleDelete} />)}
          style={styles.list}
        />

        {show && (
          <DatePicker
            onClose={handleClose}
            date={newDate}
            onChange={dateChange}
          />
        )}

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
    marginLeft: 5
  },
  containerFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  btnFilter: {
    marginHorizontal: 10,
  },
  list: {
    paddingTop: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
})