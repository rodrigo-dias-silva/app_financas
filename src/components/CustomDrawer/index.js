import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { AuthContext } from '../../contexts/auth'

export default function CustomDrawer(props) {
  const { user, signOut } = useContext(AuthContext)

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.imgView}>
        <Image
          source={require('../../images/Logo.png')}
          style={styles.img}
        />
        <Text style={styles.titleTxt}>Bem vindo</Text>
        <Text style={styles.userTxt}>
          {user && user.name}
        </Text>
      </View>
      <DrawerItemList
        {...props}
      />
      <DrawerItem
        {...props}
        inactiveBackgroundColor='#c62c36'
        label='Sair do app'
        onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  imgView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  img: {
    width: 85,
    height: 85,
    resizeMode: 'contain'
  },
  titleTxt: {
    color: '#fff',
    fontSize: 18,
    marginTop: 5
  },
  userTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 25
  }
})