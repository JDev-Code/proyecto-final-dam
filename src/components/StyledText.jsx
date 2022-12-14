import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { theme } from '../../theme'

// Crea un texto estilado
function StyledText ({ text, ...props }) {

  const style = [
    props.title && styles.title,
    props.subtitle && styles.subtitle,
    props.normal && styles.normal,
    props.error && styles.error,
    props.success && styles.success,
    props.custom && props.custom
  ]

  return (
    <Text style={style}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSizes.big,
    fontWeight: theme.fontStyles.h1,
    color: theme.colors.default
  },
  subtitle: {
    fontSize: theme.fontSizes.normal,
    fontWeight: theme.fontStyles.h1,
    color: theme.colors.secondary,
  },
  normal: {
    fontSize: theme.fontSizes.small,
    fontWeight: theme.fontStyles.h1,
    color: theme.colors.default
  },
  error: {
    fontSize: theme.fontSizes.small,
    fontWeight: theme.fontStyles.h1,
    color: theme.colors.error,
  },
  success: {
    fontSize: theme.fontSizes.normal,
    fontWeight: theme.fontStyles.h1,
    color: theme.colors.success,
  },
})

export default StyledText