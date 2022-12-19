import { StyleSheet, Text, View } from 'react-native'
import { Picker as PickerRN } from '@react-native-picker/picker'
import React from 'react'

export default function Picker({ onChange, tipo }) {
  return (
    <View style={styles.container}>
      <PickerRN
        style={styles.picker}
        onValueChange={(valor) => onChange(valor)}
        selectedValue={tipo}
      >
        <PickerRN.Item label='Receita' value='receita' />
        <PickerRN.Item label='Despesa' value='despesa' />
      </PickerRN>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#ffffff33',
    alignItems: 'center',
    width: '90%',
    borderRadius: 8
  },
  picker: {
    color: '#ffffff66',
    width: '100%',
  }
})