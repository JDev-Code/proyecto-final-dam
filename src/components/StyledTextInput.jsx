import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#b9b9b9',
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  error: {
    borderColor: '#eb6464'
  }
})

function StyledTextInput ({ style, error, ...props }) {

  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ]

  return (
    <TextInput
      style={inputStyle}
      {...props} />
  )
}

export default StyledTextInput
