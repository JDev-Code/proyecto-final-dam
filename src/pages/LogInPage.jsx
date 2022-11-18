import React, { useState, useEffect, useContext } from 'react'
import { Formik } from 'formik'
import { Button, View, Text, TouchableWithoutFeedback } from 'react-native'
import { logInValidationSchema } from '../validationSchemas/logIn'
import FormikInputValue from '../components/FormikInputValue'
import { Link } from 'react-router-native'
import { theme } from '../../theme'
import logIn from '../express/logIn'
import Context from '../context/Context'

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
    height: '100%',
    justifyContent: 'center'
  },
  link: {
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  tertiary: {
    textAlign: 'center',
    color: theme.colors.tertiary
  }
}

function LogInPage () {

  const context = useContext(Context)
  const { userContext, setUserContext } = context

  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [errorLogIn, setErrorLogIn] = useState('')

  async function handleFormikSubmit ({ email, password }) {
    setErrorLogIn('')
    setUserContext(await logIn(email, password))
    userContext === null && setErrorLogIn('Incorrect data. Try again!')
  }

  useEffect(() => {
    validEmail && validPassword ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [validEmail, validPassword])

  return (

    <View style={style.window}>
      <Formik validationSchema={logInValidationSchema} initialValues={initialValues} onSubmit={handleFormikSubmit}>
        {({ handleSubmit }) => {
          return (
            <View style={style.form}>
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
                title='Log In'
                disabled={buttonDisabled}
              />
              <Text style={{ color: 'red' }}>{errorLogIn}</Text>
              <Text />
              <Text />
              <Text style={style.tertiary}>You don't have an account?</Text>
              <Link to='/signUp' underlayColor={'#fff00'} component={TouchableWithoutFeedback}>
                <Text style={style.link}>Sign up here for free!</Text>
              </Link>
            </View>
          )
        }}
      </Formik>
    </View>
  )
}



export default LogInPage