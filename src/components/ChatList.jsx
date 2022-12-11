import React, { useState, useEffect, useContext } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Context from '../context/Context'
import ChatItem from './ChatItem'
import StyledText from './StyledText'

function ChatList ({setSelectedChatContext}) {

  const context = useContext(Context)
  const { userContext, messagesContext } = context
  const [chats, setChats] = useState([])

  useEffect(() => {
    if (messagesContext !== null) {
      let currentChats = []
      messagesContext.slice().reverse().map(msg => {
        msg.msgFrom === userContext.id
          ?
          (currentChats.findIndex((chat) => chat.id === msg.msgTo) === -1) && currentChats.push({ id: msg.msgTo, username: msg.username, identifier: msg.identifier })
          :
          (currentChats.findIndex((chat) => chat.id === msg.msgFrom) === -1) && currentChats.push({ id: msg.msgFrom, username: msg.username, identifier: msg.identifier })
      })
      setChats(currentChats)
    }
  }, [messagesContext])

  return (
    <View style={styles.container}>
      {chats.length > 0
        ?
        <FlatList
          contentContainerStyle={styles.list}
          data={chats}
          ItemSeparatorComponent={() => { }}
          renderItem={({ item: chat }) => {
            return (
              <ChatItem chat={chat} setSelectedChat={setSelectedChatContext} />
            )
          }} />
        :
        <View style={styles.noChats}>
          <StyledText text={"NOT CHATS YET"} subtitle/>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 57
  },
  list: {
    paddingBottom: 100
  },
  noChats: {
    alignItems: "center", 
    height: '92%', 
    justifyContent: 'center'
  }
})

export default ChatList