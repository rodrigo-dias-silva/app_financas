import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DatePicker({ onClose, date, onChange }) {

  const [dateNow, setDateNow] = useState(new Date(date))

  return (
    <TouchableOpacity style={styles.container}>
      {Platform.OS === 'ios' && (
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.txt}>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
      <DateTimePicker
        value={dateNow}
        mode='date'
        display='default'
        onChange={(e, d) => {
          const currentDate = d || dateNow
          setDateNow(currentDate)
          onChange(currentDate)
        }}
        style={styles.picker}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${Platform.OS === 'ios' ? '#00000066' : 'transparent'}`,
    position: 'absolute',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    padding: 16,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  picker: {
    backgroundColor: '#fff',
    height: 100,
  },
  txt: {
    fontSize: 20
  }
})