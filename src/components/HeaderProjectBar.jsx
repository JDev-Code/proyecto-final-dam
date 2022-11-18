import React from "react"
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { useHistory } from "react-router-native"

function HeaderProjectBar () {

  const history = useHistory()

  function handleCreateProject(){
    history.push('/createProject')
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
      <View>
        <Text style={{ color: 'white' }}>LOGO</Text>
      </View>
      <View>
        <TouchableWithoutFeedback onPress={handleCreateProject}>
          <Text style={{ color: 'white' }}>BOTON</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default HeaderProjectBar