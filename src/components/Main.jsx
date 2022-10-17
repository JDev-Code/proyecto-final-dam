import React from 'react'
import { View, Text } from 'react-native'
import LogInPage from '../pages/LogIn'
import Constants from 'expo-constants'


function Main () {
  return (
    <View style={{paddingTop: Constants.statusBarHeight}}>
      <LogInPage />
    </View>
  )
}

export default Main