// Añade el mensaje nuevo a los ya existentes y devulve ambos
function pushMyNewMessage ( from, to, msg, messagesContext) {

  let allMessages = messagesContext
  const newMessage = {
    "msgFrom": from.id,
    "msgTo": to.id,
    "message": msg,
    "isRead": 0,
    "username": to.username,
    "identifier": to.identifier
  }

  allMessages.push(newMessage)

  const newMessageToSend = {
    "msgFrom": from.id,
    "msgTo": to.id,
    "message": msg,
    "isRead": 0,
    "username": from.username,
    "identifier": from.identifier
  }

  return({allMessages, newMessageToSend})
}


export default pushMyNewMessage