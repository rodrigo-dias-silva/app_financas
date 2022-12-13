import { StyleSheet, View } from 'react-native'
import { PickerIOS } from '@react-native-picker/picker'
import React, { useState } from 'react'

export default function Picker({ onChange, tipo }) {

  return (
    <View style={styles.container}>

      <PickerIOS
        style={styles.picker}
        onValueChange={(valor) => onChange(valor)}
        selectedValue={tipo}
        itemStyle={{ color: '#fff' }}
      >
        <PickerIOS.Item label='Receita' value='receita' />
        <PickerIOS.Item label='Despesa' value='despesa' />
      </PickerIOS>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  picker: {
    width: '100%',
  }
})