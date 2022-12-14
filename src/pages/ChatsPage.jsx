import React, {useEffect, useContext} from "react"
import { View, StyleSheet, DeviceEventEmitter } from 'react-native'
import ChatList from "../components/ChatList"
import TitleTopBar from "../components/TitleTopBar"
import Context from "../context/Context"

// Página con la lista de tus chats
function ChatsPage () {
  DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  DeviceEventEmitter.addListener('hardwareBackPress', handleBackPress)

  const context = useContext(Context)
  const { setSelectedChatContext, setSelectedWindow } = context

  useEffect(() => {
    setSelectedChatContext(null)
  }, [])

  function handleBackPress () {
    setSelectedWindow('project')
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  }

  return (
    <View style={styles.window}>
      <TitleTopBar title={'CHATS'} />
      <ChatList setSelectedChatContext={setSelectedChatContext}/>
    </View>
  )
}

const styles = StyleSheet.create({
  window: {
    height: '100%'
  }
})

export default ChatsPage