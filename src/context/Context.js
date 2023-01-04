import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-native"
import readUserInfo from "../util/readUserInfo"
import removeUserInfo from "../util/removeUserInfo"
import storeUserInfo from "../util/storeUserInfo"
import getMessages from "../express/getMessages"
import { socket } from "../express/socketConnection"

const Context = React.createContext({})

// Contexto global a la aplicación con funcionalidades asociadas
export function AppContext ({ children }) {
  const history = useHistory()

  const [userContext, setUserContext] = useState()
  const [messagesContext, setMessagesContext] = useState(null)
  const [newMessageContext, setNewMessageContext] = useState(null)
  const [selectedChatContext, setSelectedChatContext] = useState(null)
  const [selectedWindow, setSelectedWindow] = useState('')
  const [projectsContext, setProjectsContext] = useState('')
  const [receivedMsg, setReceivedMsg] = useState(null)
  const [currentSocketId, setCurrentSocketId] = useState('')

  useEffect(() => {
    socket.on('welcome', msg => {
      console.log(msg)
      setCurrentSocketId(socket.id)
    })
  }, [])

  useEffect(() => {
    console.log('Socket changed')
    if (currentSocketId !== '') {
      if (userContext.id !== null) {
        createRoom(userContext.id)
      }
    }
  }, [currentSocketId])

  useEffect(() => {
    const read = async () => {
      const data = await readUserInfo()
      setUserContext(data)
    }
    read()
  }, [])

  useEffect(() => {
    if (userContext) {
      const action = async () => {
        if (userContext === 'delete') {
          await removeUserInfo()
          setUserContext('no-user')
          console.log('no-user');
          setMessagesContext(null)
        }
        if ((userContext !== 'no-user') && (userContext !== 'delete')) {
          await storeUserInfo(userContext)
          createRoom(userContext.id)
          setMessagesContext(await getMessages(userContext.id))
        }
        setSelectedWindow('landingPage')
      }
      action()
    }
  }, [userContext])

  function createRoom (id) {
    console.log('creating room', id);
    socket.emit('createRoom', id)
  }

  useEffect(() => {
    if (selectedChatContext !== null) {
      setSelectedWindow('currentChat')
    }
  }, [selectedChatContext])

  useEffect(() => {
    if (newMessageContext !== null) {
      setMessagesContext([...newMessageContext.all])
      console.log('EMITTING...')
      socket.emit('sendMsg', newMessageContext.id, newMessageContext.newMsg)
      setNewMessageContext(null)
    }
  }, [newMessageContext])

  useEffect(() => {
    socket.on('msgFromServer', (msg) => {
      setReceivedMsg(msg)
    })
  }, [])

  useEffect(() => {
    if (messagesContext !== null) {
      if (receivedMsg.msgTo === userContext.id) {
        setMessagesContext([...messagesContext, receivedMsg])
      }
    }
  }, [receivedMsg])

  useEffect(() => {
    selectedWindow === 'landingPage' && history.push('/landingPage')
    selectedWindow === 'logIn' && history.push('/logIn')
    selectedWindow === 'signUp' && history.push('/signUp')
    selectedWindow === 'project' && history.push('/app/projects')
    selectedWindow === 'chat' && history.push('/app/chats')
    selectedWindow === 'profile' && history.push('/app/myProfile')
    selectedWindow === 'createProject' && history.push('/createProject')
    selectedWindow === 'currentChat' && history.push('/currentChat')
  }, [selectedWindow])

  return <Context.Provider
    value={{
      userContext, setUserContext,
      messagesContext, setMessagesContext,
      selectedChatContext, setSelectedChatContext,
      projectsContext, setProjectsContext,
      selectedWindow, setSelectedWindow,
      newMessageContext, setNewMessageContext
    }}>{children}</Context.Provider>
}

export default Context