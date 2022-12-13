import React from 'react'
import { Formik } from 'formik'
import { useState, useEffect, useContext } from 'react'
import { Pressable, View, StyleSheet, TouchableWithoutFeedback, DeviceEventEmitter, BackHandler } from 'react-native'
import { signUpValidationSchema } from '../validationSchemas/signUp'
import FormikInputValue from '../components/FormikInputValue'
import { Link } from 'react-router-native'
import { theme } from '../../theme'
import signUp from '../express/signUp'
import Context from '../context/Context'
import StyledText from '../components/StyledText'

const initialValues = {
  username: '',
  email: '',
  password: ''
}

function SignUpPage () {
  DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  DeviceEventEmitter.addListener('hardwareBackPress', () => { BackHandler.exitApp() })

  const context = useContext(Context)
  const { userContext, setUserContext } = context

  const [validUsername, setValidUsername] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [errorSignUp, setErrorSignUp] = useState('')
  const [buttonStyle, setButtonStyle] = useState([styles.button, styles.buttonDisabled])

  async function handleFormikSubmit ({ username, email, password }) {
    if (!buttonDisabled) {
      setUserContext('')
      setUserContext(await signUp(username, email, password))
    }
  }

  useEffect(() => {
    userContext === null ? 
    setErrorSignUp('Email already in use!')
    : 
    setErrorSignUp('')
  }, [userContext])

  useEffect(() => {
    validUsername && validEmail && validPassword ? setButtonDisabled(false) : setButtonDisabled(true)
  }, [validUsername, validEmail, validPassword])

  useEffect(() => {
    if (buttonDisabled) {
      setButtonStyle([styles.button, styles.buttonDisabled])
    } else {
      setButtonStyle([styles.button, styles.buttonEnabled])
    }
  }, [buttonDisabled])

  return (
    <View style={styles.window}>
      <View style={styles.title}>
        <StyledText text={'Sign Up'} custom={styles.customTitle} title />
      </View>
      <Formik validationSchema={signUpValidationSchema} initialValues={initialValues} onSubmit={handleFormikSubmit} validateOnBlur>
        {({ handleSubmit }) => {
          return (
            <View style={styles.form}>
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
              <Pressable style={buttonStyle} onPress={handleSubmit}>
                <StyledText text={'SIGN UP'} custom={styles.customButtonText} normal />
              </Pressable>
              <StyledText text={errorSignUp} error />
            </View>
          )
        }}
      </Formik>
      <Link to='/logIn' component={TouchableWithoutFeedback}>
        <View style={styles.bottomBar}>
          <StyledText text={"Already have an account? "} subtitle />
          <StyledText text={" Log in!"} custom={styles.customLogIn} subtitle />
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
  customLogIn: {
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

export default SignUpPage