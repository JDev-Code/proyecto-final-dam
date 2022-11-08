import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Icon } from "@rneui/themed"

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
  general: {
    alignItems: 'center', 
    justifyContent: 'center'
  }
})

function StyledIcon ({ name, type, selected,...props }) {

  let color = '#f0f0f0'
  if (selected) color = '#a260c0'

  let position
  if (props.projectIcon) position = 0
  if (props.categoriesBar) position = 1
  if (props.appBar) position = 2


  const style = [
    props.projectIcon && styles.projectIcon,
    props.categoriesBar && styles.categoriesBar,
    props.appBar && styles.appBar,
    styles.general
  ]

  return (
    <View style={style}>
      <Icon name={name} type={type} color={color} size={style[position].size} />
    </View>
  )
}

export default StyledIcon

// <Icon name={name} type={type} color={style[position].color} size={style[position].size} />