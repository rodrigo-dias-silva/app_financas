import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export default function List({ data, deleteItem }) {
  return (
    <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
      <View style={[styles.container, styles.shadowContainer]}>
        <View style={styles.viewType}>
          <View style={[styles.iconView, { backgroundColor: data.type === 'despesa' ? '#c62c36' : '#049301' }]}>
            <Feather
              name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
              color={'#fff'}
              size={20}
            />
            <Text style={styles.typeTxt}>{data.type === 'despesa' ? 'despesa' : 'receita'}</Text>
          </View>
        </View>
        <Text style={styles.valueTxt}>
          R$ {data.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#f3f4f6',
    marginHorizontal: 8,
    borderRadius: 5
  },
  shadowContainer: {
    shadowColor: '#171717',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  viewType: {
    flexDirection: 'row'
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5
  },
  typeTxt: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic'
  },
  valueTxt: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})