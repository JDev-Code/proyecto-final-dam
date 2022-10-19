import React from 'react'
import { Formik } from 'formik'
import { useState, useEffect } from 'react'
import { Button, View, Text, TouchableWithoutFeedback } from 'react-native'
import { signupValidationSchema } from '../validationSchemas/signup'
import FormikInputValue from '../components/FormikInputValue'
import { Link } from 'react-router-native'
import {theme} from '../../theme'

const initialValues = {
  username: '',
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
    textDecorationLine: 'underline'
  },
  tertiary: {
    textAlign: 'center',
    color: theme.colors.tertiary
  }
}

function LogInPage () {

  const [validUsername, setValidUsername] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    validUsername && validEmail && validPassword ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [validUsername, validEmail, validPassword])

  return (
    <View style={style.window}>
      <Formik validationSchema={signupValidationSchema} initialValues={initialValues} onSubmit={(values) => console.log(values)} validateOnBlur>
        {({ handleSubmit }) => {
          return (
            <View style={style.form}>
              <FormikInputValue
                name='username'
                placeholder='Username'
                setDisabled={setValidUsername}
              />
              <FormikInputValue
                name='email'
                placeholder='E-mail'
                setDisabled={setValidEmail}
              />
              <FormikInputValue
                name='password'
                placeholder='Password'
                secureTextEntry
                setDisabled={setValidPassword}
              />
              <Button
                onPress={handleSubmit}
                title='Sign up'
                disabled={buttonDisabled}
              />
              <Text></Text>
              <Text></Text>
              <Text style={style.tertiary}>Already have an account?</Text>
              <Link to='/logIn' component={TouchableWithoutFeedback}>
                <Text style={style.link}>Log in</Text>
              </Link>
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