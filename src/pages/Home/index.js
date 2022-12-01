import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

export default function Home() {

  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.name}</Text>
      <Text>{user && user.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})