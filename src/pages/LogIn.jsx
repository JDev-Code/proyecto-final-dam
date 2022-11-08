import React from 'react'
import { Formik } from 'formik'
import { useState, useEffect } from 'react'
import { Button, View, Text, TouchableWithoutFeedback } from 'react-native'
import { loginValidationSchema } from '../validationSchemas/login'
import FormikInputValue from '../components/FormikInputValue'
import { Link, useHistory } from 'react-router-native'
import { theme } from '../../theme'
import logInUser from '../hooks/logInUser'
import readUserInfo from '../context/readUserInfo'
import logIn from '../express/logIn'

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
  const history = useHistory()
  
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [errorLogIn, setErrorLogIn] = useState('')

  async function checkLogged () {
    const alreadyLogged = await readUserInfo()
    alreadyLogged && history.push('/app/projects')
  }
  checkLogged()

  async function handleFormikSubmit({email, password}){
    setErrorLogIn('')
    await logIn(email, password)
    const alreadyLogged = await readUserInfo()
    alreadyLogged ? history.push('/app/projects') : setErrorLogIn('Incorrect data. Try again!')
  }

  useEffect(() => {
    validEmail && validPassword ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [validEmail, validPassword])

  return (

    <View style={style.window}>
      <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={handleFormikSubmit}>
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
              <Text style={{color: 'red'}}>{errorLogIn}</Text>
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