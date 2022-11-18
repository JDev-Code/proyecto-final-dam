import { View, Text } from "react-native"
import BackButton from "./BackButton"
import StyledIcon from "./StyledIcon"

function BackBar ({ title, to }) {
  return (
    <>
      <View>
        <BackButton />
      </View>
      <View style={{ width: '100%', justifyContent: 'space-around'}}>
        <Text style={{ color: 'white' }}>{title}</Text>
      </View>
    </>
  )
}

export default BackBar