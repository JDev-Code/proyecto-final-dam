import { useContext } from "react"
import { View, StyleSheet } from "react-native"
import { theme } from "../../theme"
import Context from "../context/Context"
import StyledText from "./StyledText"

// Crea cada uno de los mensajes de un chat
function ChatMessage ({ from, msg }) {

  const context = useContext(Context)
  const { userContext } = context

  const msgStyle = [
    from === userContext.id && styles.mineColor,
    from !== userContext.id && styles.notMineColor,
    styles.general,
  ]

  const msgContainerStyle = [
    from === userContext.id && styles.mineAlign,
    from !== userContext.id && styles.notMineAlign,
    styles.allInsideAlign
  ]

  return (
    <View style={msgContainerStyle}>
      <StyledText text={msg} custom={msgStyle} normal />
    </View>
  )
}


const styles = StyleSheet.create({
  mineAlign: {
    alignItems: 'flex-end',
  },
  notMineAlign: {
    alignItems: 'flex-start',
  },
  allInsideAlign: {
    verticalAlign: 'center',
  },
  mineColor: {
    backgroundColor: '#49508d'
  },
  notMineColor:{
    backgroundColor: '#77498d'
  },
  general: {
    color: 'lightgrey',
    textAlign: 'left',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.background,
    marginHorizontal: 15,
    marginVertical: 3,
    maxWidth: '60%',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'center'
  }
})

export default ChatMessage