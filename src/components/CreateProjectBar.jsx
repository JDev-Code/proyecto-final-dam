import React from "react"
import {View, Text} from 'react-native'

function CreateProjectBar(){
  return(
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15}}>
      <View>
      <Text style={{color: 'white'}}>LOGO</Text>
      </View>
      <View>
        <Text style={{color: 'white'}}>BOTON</Text>
      </View>
    </View>
  )
}

export default CreateProjectBar