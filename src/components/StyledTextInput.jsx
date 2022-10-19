import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  default: {
    borderColor: '#b9b9b9'
  },
  error: {
    borderColor: '#eb6464'
  },
  noError: {
    borderColor: 'green'
  }
})

function StyledTextInput ({ value, style, error, ...props }) {

  let inputStyle = [
    styles.textInput,
    error && styles.error,
    !error && styles.noError,
    value === '' && styles.default,
    style,
  ]

  return (
    <TextInput
      style={inputStyle}
      {...props} />
  )
}

export default StyledTextInput
