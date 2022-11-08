import React, { useEffect } from 'react'
import { useField } from 'formik'
import { Text } from 'react-native'
import StyledTextInput from './StyledTextInput'

const style = {
  error: {
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'red'
  }
}

function FormikInputValue ({ name, setDisabled, ...props }) {

  const [field, meta, helpers] = useField(name)

  useEffect(() => {
    meta.error = ""
  }, [])

  useEffect(() => {
    ((meta.error != undefined) || (meta.error = '')) ? setDisabled(false) : setDisabled(true)
  }, [meta.error])


  return (
    <>
      <StyledTextInput
        value={field.value}
        error={meta.error}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error ? <Text style={style.error}>{meta.error}</Text> : <Text style={style.error}></Text>}
    </>
  )
}

export default FormikInputValue
