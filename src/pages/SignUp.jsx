import React from 'react'
import { Formik } from 'formik'
import { useState, useEffect } from 'react'
import { Button, View, Text, TouchableWithoutFeedback } from 'react-native'
import { signupValidationSchema } from '../validationSchemas/signup'
import FormikInputValue from '../components/FormikInputValue'
import { Link, useHistory } from 'react-router-native'
import {theme} from '../../theme'
import signUp from '../express/signUp'
import readUserInfo from '../context/readUserInfo'

const initialValues = {
  username: '',
  email: '',
  password: ''
}

function SignUpPage () {

  const history = useHistory()

  const [validUsername, setValidUsername] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [errorSignUp, setErrorSignUp] = useState('')

  async function handleFormikSubmit({username, email, password}){
    setErrorSignUp('')
    await signUp(username, email, password)
    const alreadyLogged = await readUserInfo()
    alreadyLogged ? history.push('/app/projects') : setErrorSignUp('Email already in use!')
  }

  useEffect(() => {
    validUsername && validEmail && validPassword ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [validUsername, validEmail, validPassword])

  return (
    <View style={style.window}>
      <Formik validationSchema={signupValidationSchema} initialValues={initialValues} onSubmit={handleFormikSubmit} validateOnBlur>
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
              <Text style={{color: 'red'}}>{errorSignUp}</Text>
              <Text></Text>
              <Text></Text>
              <Text style={style.tertiary}>Already have an account?</Text>
              <Link to='/' underlayColor={'#fff00'} component={TouchableWithoutFeedback}>
                <Text style={style.link}>Log in</Text>
              </Link>
            </View>
          )
        }}
      </Formik>
    </View>
  )
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
    textDecorationLine: 'underline'
  },
  tertiary: {
    textAlign: 'center',
    color: theme.colors.tertiary
  }
}

export default SignUpPage