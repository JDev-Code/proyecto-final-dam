import React from 'react'
import { View } from 'react-native'
import LogInPage from '../pages/LogIn'
import SignUpPage from '../pages/SignUp'
import Constants from 'expo-constants'
import {Routes, Route} from 'react-router-native'


function Main () {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <Routes>
        <Route path='/' element={<LogInPage />} exact />
        <Route path='/signUp' element={<SignUpPage />} exact />
        <Route path='/logIn' element={<LogInPage />} exact />
      </Routes>
    </View>
  )
}

export default Main