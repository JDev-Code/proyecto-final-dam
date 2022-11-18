import React, {useContext} from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import Context from '../context/Context'


function ProfilePage () {

  const context = useContext(Context)
  const {userContext, setUserContext} = context

  async function handleLogOut () {
    try {
      setUserContext(null)
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

export default ProfilePage