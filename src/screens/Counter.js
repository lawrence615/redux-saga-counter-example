import React, { useState, useEffect, memo } from 'react';
import { View, Dimensions, SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'


const Counter = (props) => {
  console.log('props', props)
  const dispatch = useDispatch()
  const ctr = useSelector(state => state.counter)

  const onReduxIncreaseCounter = () => {
    dispatch({ type: 'INCREASE_COUNTER', value: 1 })
  }

  const onReduxDecreaseCounter = () => {
    dispatch({ type: 'DECREASE_COUNTER', value: 1 })
  }

  useEffect(() => {
    console.log('dispatch changed')
  },[dispatch])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterTitle}>Counter</Text>

      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={onReduxIncreaseCounter}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>{ctr.counter}</Text>

        <TouchableOpacity onPress={onReduxDecreaseCounter}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

export default memo(Counter)