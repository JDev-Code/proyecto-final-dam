import React, { useState, useEffect, useContext } from 'react'
import { Formik } from 'formik'
import { Pressable, View, TouchableWithoutFeedback, StyleSheet, DeviceEventEmitter, BackHandler } from 'react-native'
import { logInValidationSchema } from '../validationSchemas/logIn'
import FormikInputValue from '../components/FormikInputValue'
import StyledText from '../components/StyledText'
import { Link } from 'react-router-native'
import { theme } from '../../theme'
import logIn from '../express/logIn'
import Context from '../context/Context'

const initialValues = {
  email: '',
  password: ''
}

// Página con el formulario de LogIn
function LogInPage () {
  DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  DeviceEventEmitter.addListener('hardwareBackPress', () => { BackHandler.exitApp() })

  const context = useContext(Context)
  const { userContext, setUserContext } = context

  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [errorLogIn, setErrorLogIn] = useState('')
  const [buttonStyle, setButtonStyle] = useState([styles.button, styles.buttonDisabled])

  async function handleFormikSubmit ({ email, password }) {
    if (!buttonDisabled) {
      setUserContext('')
      setUserContext(await logIn(email, password))
    }
  }

  useEffect(() => {
    userContext === null ? 
    setErrorLogIn('Incorrect data. Try again!')
    : 
    setErrorLogIn('')
  }, [userContext])

  useEffect(() => {
    if (buttonDisabled) {
      setButtonStyle([styles.button, styles.buttonDisabled])
    } else {
      setButtonStyle([styles.button, styles.buttonEnabled])
    }
  }, [buttonDisabled])

  useEffect(() => {
    validEmail && validPassword ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [validEmail, validPassword])


  return (
    <View style={styles.window}>
      <View style={styles.title}>
        <StyledText text={'Log In'} custom={styles.customTitle} title />
      </View>
      <Formik validationSchema={logInValidationSchema} initialValues={initialValues} onSubmit={handleFormikSubmit}>
        {({ handleSubmit }) => {
          return (
            <View style={styles.form}>
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
              <Pressable style={buttonStyle} onPress={handleSubmit}>
                <StyledText text={'LOG IN'} custom={styles.customButtonText} normal />
              </Pressable>
              <StyledText text={errorLogIn} error />
            </View>
          )
        }}
      </Formik>
      <Link to='/signUp' component={TouchableWithoutFeedback}>
        <View style={styles.bottomBar}>
          <StyledText text={"You don't have an account? "} subtitle />
          <StyledText text={" Sign up!"} custom={styles.customSignUp} subtitle />
        </View>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    marginBottom: 20
  },
  customTitle: {
    color: theme.colors.main
  },
  form: {
    marginHorizontal: '15%',
    justifyContent: 'center'
  },
  window: {
    height: '100%',
    justifyContent: 'center',
    paddingBottom: 65
  },
  bottomBar: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: theme.colors.main,
    paddingVertical: 15,
  },
  customSignUp: {
    color: theme.colors.main
  },
  button: {
    alignItems: 'center',
    padding: 7,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 5
  },
  customButtonText: {
    color: theme.colors.background
  },
  buttonDisabled: {
    backgroundColor: theme.colors.secondary
  },
  buttonEnabled: {
    backgroundColor: theme.colors.main,
  }
})

export default LogInPage