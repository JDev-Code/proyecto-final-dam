import React, {useContext} from "react"
import { View } from "react-native"
import { useHistory } from "react-router-native"
import Context from "../context/Context"

function LandingPage(){
  const history = useHistory()

  const context = useContext(Context)
  const {userContext, setUserContext} = context
  
  setTimeout(() => {
    userContext !== null ? history.push('/app/projects') : history.push('/logIn')
  }, 1500)

  return <View style={{backgroundColor: 'green', height: '100%'}}></View>
}

export default LandingPage