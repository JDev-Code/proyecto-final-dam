import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { theme } from '../../theme'
import CustomImage from './CustomImage'
import StyledText from './StyledText'


function ChatItem ({ chat, setSelectedChat }) {

  function handleSelectedChat () {
    setSelectedChat({ id: chat.id, username: chat.username, identifier: chat.identifier })
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleSelectedChat}>
        <View style={styles.chatItem}>
          <View>
            <CustomImage source={require('../../assets/defaultProfile.png')} chatItem />
          </View>
          <StyledText text={chat.username + " #" + chat.identifier} subtitle/>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  chatItem: {
    height: 80, 
    alignItems: 'center', 
    borderBottomColor: theme.colors.secondary, 
    borderBottomWidth: .5, 
    flexDirection: 'row' 
  }
})

export default ChatItem