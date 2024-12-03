import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppNavigation from './src/navigation/AppNavigation'

const App = () => {
  const [splash, setSplash] = useState(true);
  return (
    <>
      <AppNavigation />
    </>
  )
}

export default App

const styles = StyleSheet.create({})