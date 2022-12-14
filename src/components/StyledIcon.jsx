import React from "react"
import { View, StyleSheet } from "react-native"
import { Icon } from "@rneui/themed"
import { theme } from "../../theme"

// Da estilos a los iconos de la aplicación dependiendo de la procedencia
function StyledIcon ({ name, type, selected, ...props }) {

  let color = theme.colors.default
  if (selected || props.backBar || props.plus) color = theme.colors.main
  if (props.logout) color = theme.colors.error
  if (props.projectChat) color = theme.colors.secondary
  if (props.trash) color = theme.colors.secondary

  let position
  if (props.projectIcon) position = 0
  if (props.categoriesBar) position = 1
  if (props.appBar) position = 2
  if (props.backBar) position = 3
  if (props.plus) position = 4
  if (props.logout) position = 5
  if (props.projectChat) position = 6
  if (props.trash) position = 7


  const style = [
    props.projectIcon && styles.projectIcon,
    props.categoriesBar && styles.categoriesBar,
    props.appBar && styles.appBar,
    props.backBar && styles.backBar,
    props.plus && styles.plus,
    props.logout && styles.logout,
    props.projectChat && styles.projectChat,
    props.trash && styles.trash,
    styles.general
  ]

  return (
    <View style={style}>
      <Icon name={name} type={type} color={color} size={style[position].size} />
    </View>
  )
}


const styles = StyleSheet.create({
  projectIcon: {
    size: 40,
    height: 43,
    width: 43
  },
  categoriesBar: {
    size: 25,
    height: 28,
    width: 28
  },
  appBar: {
    size: 27,
    height: 30,
    width: 30
  },
  backBar: {
    size: 40,
    height: 43,
    width: 43
  },
  plus: {
    size: 20,
    paddingRight: 5
  },
  logout: {
    size: 18,
    marginLeft: 7,
  },
  projectChat: {
    size: 18,
    paddingLeft: 5,
    paddingTop: 2
  },
  trash: {
    size: 55
  },
  general: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default StyledIcon
