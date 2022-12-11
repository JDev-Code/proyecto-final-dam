import { useContext } from "react"
import { View, StyleSheet, TouchableWithoutFeedback, DeviceEventEmitter } from "react-native"
import StyledIcon from "./StyledIcon"
import Context from "../context/Context"



function BackButton ({ to }) {
  DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  DeviceEventEmitter.addListener('hardwareBackPress', handleBackPress)

  const context = useContext(Context)
  const { setSelectedWindow } = context

  function handleBackPress () {
    to && setSelectedWindow(to)
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  }

  return (
    <TouchableWithoutFeedback onPress={handleBackPress}>
      <View style={styles.general} >
        <StyledIcon name={'chevron-back'} type={'ionicon'} backBar />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  general: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BackButton