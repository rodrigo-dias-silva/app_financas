import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Header() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.toggleDrawer()}>
        <Feather name='menu' size={30} color='#fff' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 15,
    marginBottom: 15,
    width: '90%',
    height: 50
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})