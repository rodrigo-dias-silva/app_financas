import { StyleSheet, Text, View } from 'react-native'
import { Picker as RNPickerSelect } from '@react-native-picker/picker'
import React from 'react'

export default function Picker({ onChange, tipo }) {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        style={styles.picker}
        onValueChange={(valor) => onChange(valor)}
        selectedValue={tipo}

      >
        <RNPickerSelect.Item label='Receita' value='receita' />
        <RNPickerSelect.Item label='Despesa' value='despesa' />
      </RNPickerSelect>
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