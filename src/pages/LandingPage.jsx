import React, { useContext, useEffect } from "react"
import { View, StyleSheet, DeviceEventEmitter } from "react-native"
import CustomImage from "../components/CustomImage"
import Context from "../context/Context"

function LandingPage () {
  DeviceEventEmitter.removeAllListeners('hardwareBackPress')

  const context = useContext(Context)
  const { userContext, setSelectedWindow } = context

  useEffect(() => {
    setTimeout(() => {
      userContext !== 'no-user' ? setSelectedWindow('project') : setSelectedWindow('logIn')
    }, 1500)
  }, [])


  return (
    <View style={styles.window}>
      <CustomImage source={require('../../assets/logoWe.png')} landingPage />
    </View>
  )
}

const styles = StyleSheet.create({
  window: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default LandingPage

