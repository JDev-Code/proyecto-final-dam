import { View, StyleSheet } from "react-native"
import { theme } from "../../theme"
import BackButton from "./BackButton"
import CustomImage from "./CustomImage"
import StyledText from "./StyledText"

// Crea una barra con botón de 'ATRAS'
function BackBar ({ title, to, ...props }) {

  return (
    <View style={styles.general}>
      <BackButton to={to} props={props} />
      {props.chat ?
        <CustomImage source={require('../../assets/defaultProfile.png')} currentChat />
        :
        <View></View>
      }
      <View>
        <StyledText text={title} title />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  general: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderBottomWidth: .4,
    borderBottomColor: theme.colors.main
  },
  title: {
    width: '100%',
    justifyContent: 'space-around'
  }
})


export default BackBar