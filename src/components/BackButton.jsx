import { View, Text, TouchableWithoutFeedback } from "react-native"
import { useHistory } from "react-router-native"
import StyledIcon from "./StyledIcon"

function BackButton () {
  const history = useHistory()

  function handleBackPress () {
    history.goBack()
  }

  return (
    <TouchableWithoutFeedback onPress={handleBackPress}>
      <View style={{ flexDirection: 'row', height: 40, backgroundColor: 'red', alignItems: 'center'}} >
        <StyledIcon name={'chevron-back'} type={'ionicon'} backBar />
        <Text style={{ color: 'white' }}>BACK</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BackButton