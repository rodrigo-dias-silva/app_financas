import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

export default function Home() {

  const { user, signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.name}</Text>
      <Text>{user && user.email}</Text>

      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})