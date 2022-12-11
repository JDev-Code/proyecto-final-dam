import { useContext, useEffect, useState } from "react"
import { View, Pressable, FlatList } from "react-native"
import BackBar from "../components/BackBar"
import ChatMessage from "../components/ChatMessage"
import Context from "../context/Context"
import { chat } from "../validationSchemas/chat"
import { Formik } from "formik"
import FormikInputValue from "../components/FormikInputValue"
import formatText from "../util/formatText"
import pushMyNewMessage from "../util/pushMyNewMessage"
import { StyleSheet } from "react-native"
import StyledText from "../components/StyledText"
import { theme } from "../../theme"


let initialValues = {
  chatInput: ''
}

function CurrentChatPage () {

  const context = useContext(Context)
  const { userContext, selectedChatContext, messagesContext, setNewMessageContext } = context

  const headerProps = {
    title: selectedChatContext.username + ' #' + selectedChatContext.identifier,
    to: "chat"
  }
  const [thisChatMessages, setThisChatMessages] = useState([])
  const [isMessages, setIsMessages] = useState(false)
  const [validMessage, setValidMessage] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [messageToSend, setMessageToSend] = useState(null)
  const [buttonStyle, setButtonStyle] = useState([styles.button, styles.buttonDisabled])

  useEffect(() => {
    if (buttonDisabled) {
      setButtonStyle([styles.button, styles.buttonDisabled])
    } else {
      setButtonStyle([styles.button, styles.buttonEnabled])
    }
  }, [buttonDisabled])

  let listViewRef
  useEffect(() => {
    if (messageToSend !== null) {
      let formatedMessage = formatText(messageToSend)
      if (formatedMessage !== '') {
        const { allMessages, newMessageToSend } = pushMyNewMessage(userContext, selectedChatContext, formatedMessage, messagesContext)
        setNewMessageContext({ 'id': selectedChatContext.id, 'newMsg': newMessageToSend, 'all': allMessages })
        console.log('ENVIANDO...')
      }
      setMessageToSend(null)
      if (listViewRef !== undefined) {
        listViewRef.scrollToOffset({ animated: true })
      }
    }
  }, [messageToSend])

  useEffect(() => {
    validMessage ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [validMessage])

  useEffect(() => {
    let messages = []

    messagesContext.slice().reverse().forEach(msg => {
      if ((msg.msgTo === selectedChatContext.id) || (msg.msgFrom === selectedChatContext.id)) {
        messages.push(msg)
      }
    })

    setThisChatMessages([...messages])
  }, [messagesContext])

  useEffect(() => {
    if (thisChatMessages.length > 0) {
      setIsMessages(true)
    } else {
      setIsMessages(false)
    }
  }, [thisChatMessages])

  return (
    <>
      <BackBar title={headerProps.title} to={headerProps.to} chat />
      <View style={styles.chatOutside}>
        {isMessages
          ?
          <FlatList
            inverted
            ref={(ref) => {
              listViewRef = ref
            }}
            contentContainerStyle={styles.list}
            data={thisChatMessages}
            ItemSeparatorComponent={() => { }}
            renderItem={({ item: message }) => {
              return (
                <ChatMessage from={message.msgFrom} msg={message.message} />
              )
            }}
          />
          :
          <View style={styles.noMessages}>
            <View>
              <StyledText text={"NOT MESSAGES YET"} subtitle />
            </View>
          </View>
        }
      </View>
      <View style={styles.formik}>
        <Formik
          validationSchema={chat}
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            setMessageToSend(values.chatInput)
            resetForm({ 'chatInput': '' })
          }}
        >
          {
            ({ handleSubmit }) => {
              return (
                <View style={styles.form}>
                  <FormikInputValue
                    name='chatInput'
                    placeholder='Write here...'
                    setDisabled={setValidMessage}
                    style={styles.chatInput}
                    multiline
                    chat
                  />
                  <Pressable style={buttonStyle} onPress={handleSubmit}>
                    <StyledText text={'SEND'} custom={styles.customButtonText} normal />
                  </Pressable>
                </View>
              )
            }
          }
        </Formik>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  chatOutside: {
    height: '100%',
    backgroundColor: theme.colors.background,
    justifyContent: 'flex-end'
  },
  list: {
    paddingTop: 130,
    paddingBottom: 30
  },
  noMessages: {
    height: '120%',
    justifyContent: 'center',
    alignItems: "center"
  },
  formik: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  form: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.colors.background,
    borderTopWidth: .4,
    borderTopColor: theme.colors.main
  },
  chatInput: {
    width: '80%'
  },
  button: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 3,
  },
  customButtonText:{
    color: theme.colors.background
  },
  buttonDisabled:{
    backgroundColor: theme.colors.secondary
  },
  buttonEnabled:{
    backgroundColor: theme.colors.main,
  }
})

export default CurrentChatPage