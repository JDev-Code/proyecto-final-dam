import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: 'white',
  },
  multiline: {
    textAlignVertical: 'top',
    paddingVertical: 15,
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

function StyledTextInput ({ value, style, error, multiline, ...props }) {

  let inputStyle = [
    styles.textInput,
    multiline && styles.multiline,
    error && styles.error,
    !error && styles.noError,
    value === '' && styles.default,
    style,
  ]

  return (
      <TextInput
        style={inputStyle}
        placeholderTextColor={'lightgrey'}
        multiline={multiline}
        {...props} />
  )
}

export default StyledTextInput
