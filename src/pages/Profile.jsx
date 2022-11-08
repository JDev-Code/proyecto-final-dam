import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { useHistory } from 'react-router-native'
import readUserInfo from '../context/readUserInfo'
import removeUserInfo from '../context/removeUserInfo'


function Profile () {
  const history = useHistory()
  async function handleLogOut () {
    try {
      await removeUserInfo()
      console.log('push /');
      history.push('/')
    } catch (e) { }
  }
  return (
    <View>
      <Text style={{ color: 'white' }}>PROFILE</Text>
      <TouchableWithoutFeedback>
        <Text style={{ color: 'red' }} onPress={handleLogOut}>LOG OUT</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Profile