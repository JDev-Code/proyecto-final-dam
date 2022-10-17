import React from 'react'
import { Formik } from 'formik'
import { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import { loginValidationSchema } from '../validationSchemas/login'
import FormikInputValue from '../components/FormikInputValue'

const initialValues = {
  email: '',
  password: ''
}

const style = {
  form: {
    marginHorizontal: '15%',
    justifyContent: 'center'
  },
  window: {
    backgroundColor: '#91b7f070', 
    height: '100%', 
    justifyContent: 'center'
  },
  link: {
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
    onPress: {
      color: '#f9f9f9'
    }
  }
}

function LogInPage () {

  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    validEmail && validPassword ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [validEmail, validPassword])

  return (
    <View style={style.window}>
      <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={(values) => console.log(values)} validateOnBlur>
        {({ handleSubmit }) => {
          return (
            <View style={style.form}>
              <FormikInputValue
                name='email'
                placeholder='E-mail'
                initialValues
                setDisabled={setValidEmail}
              />
              <FormikInputValue
                name='password'
                placeholder='Password'
                initialValues
                secureTextEntry
                setDisabled={setValidPassword}
              />
              <Button
                onPress={handleSubmit}
                title='Log In'
                disabled={buttonDisabled}
              />
              <Text></Text>
              <Text></Text>
              <Text style={style.link}>You don't have an account?</Text>
              <Text style={style.link}>Sign up here for free!</Text>
            </View>
          )
        }}
      </Formik>
    </View>
  )
}

function CustomButton ({ active, ...props }) {
  const buttonStyles = {
    active: {
      color: 'blue'
    },
    disabled: {
      color: disabled
    }
  }

  const buttonStyle = [
    active === 'true' && buttonStyles.active.color || buttonStyles.disabled.color
  ]


  return (
    <Button buttonStyle {...props} />
  )
}

export default LogInPage