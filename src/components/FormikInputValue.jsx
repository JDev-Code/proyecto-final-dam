import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import { View, Text } from 'react-native'
import StyledTextInput from './StyledTextInput'
import StyledText from './StyledText'

const style = {
  error: {
    width: "100%",
    paddingLeft: 5
  }
}

function FormikInputValue ({ name, setDisabled, ...props }) {

  const [field, meta, helpers] = useField(name)

  useEffect(() => {
    meta.error = ''
  }, [])

  useEffect(() => {
    ((meta.error !== undefined) || (meta.error === "") || (field.value === "")) ? setDisabled(false) : setDisabled(true)
  }, [meta.error, field.value])


  return (
    <>
      <StyledTextInput
        value={field.value}
        error={meta.error}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {props.chat ? '' :

        <View style={style.error}>
          <StyledText text={meta.error ? meta.error : ''} error/>
          <Text></Text>
        </View>

      }
    </>
  )
}

export default FormikInputValue
