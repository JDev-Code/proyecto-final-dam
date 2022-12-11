import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { theme } from '../../theme'

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    paddingHorizontal: 7,
    paddingVertical: 5,
    color: theme.colors.default,
  },
  multiline: {
    textAlignVertical: 'top',
    paddingVertical: 15,
  },
  default: {
    borderColor: theme.colors.default
  },
  error: {
    borderColor: theme.colors.error
  },
  noError: {
    borderColor: theme.colors.success
  },
  chat: {
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: theme.colors.default,
    textAlignVertical: 'center',
    marginHorizontal: 0,
    marginRight: 10,
    width: '80%'
  }
})

function StyledTextInput ({ value, style, error, multiline, chat, ...props }) {

  let inputStyle = [
    styles.textInput,
    multiline && styles.multiline,
    chat && styles.chat,
    error && styles.error,
    !error && styles.noError,
    value === '' && styles.default,
    style,
  ]

  return (
    <TextInput
      value={value}
      style={inputStyle}
      placeholderTextColor={'lightgrey'}
      multiline={multiline}
      {...props} />
  )
}

export default StyledTextInput
