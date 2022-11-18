import BackBar from "../components/BackBar"
import FormikInputValue from "../components/FormikInputValue"
import React, { useState, useEffect, useContext } from 'react'
import { Formik } from 'formik'
import { Button, View, Text, StyleSheet } from 'react-native'
import { theme } from "../../theme"
import { newProjectValidationSchema } from "../validationSchemas/newProject"
import BarTab from "../components/BarTab"
import icons from '../data/iconsData'
import newProject from "../express/newProject"
import Context from "../context/Context"
import { useHistory } from "react-router-native"

const initialValues = {
  title: '',
  platform: '',
  description: ''
}

const headerProps = {
  title: 'Share your project idea!',
  to: '/app/projectList'
}

const styles = StyleSheet.create({
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
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: '10%',
    marginTop: 5,
    marginBottom: 10
  }
})

function CreateProjectPage () {

  const history = useHistory()

  const context = useContext(Context)
  const { userContext, setUserContext } = context

  const [validTitle, setValidTitle] = useState(false)
  const [validDescription, setValidDescription] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [isCreated, setIsCreated] = useState(false)

  useEffect(() => {
    if (validDescription && validTitle && selectedPlatform !== '') {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [validTitle, validDescription, selectedPlatform])

  async function handleFormikSubmit ({ title, description }) {
    setSubmitError('')
    console.log(userContext.id);
    setIsCreated(await newProject(userContext.id, selectedPlatform, title, description))
    userContext === null && setSubmitError('Something went wrong. Try again later!')
  }

  useEffect(() => {
    if (isCreated) {
      setTimeout(() => {
        if (isCreated) {
          history.goBack()
        }
      }, 1500)
    }
  }, [isCreated])

  return (

    <View style={{ height: '100%' }}>
      <BackBar title={headerProps.title} to={headerProps.to} />
      {isCreated ?
        <View style={{height: '92%', alignItems:'center', justifyContent: 'center'}}>
          <Text style={{ color: 'green' }}>HOLA</Text>
        </View>
        :
        <View style={{ backgroundColor: 'blue', height: '92%', justifyContent: 'center' }}>
          <View>
            <View style={styles.icons}>
              {icons.map((icon) => {
                if (icon.filter) {
                  return (
                    <BarTab name={icon.name} type={icon.type} key={icon.iconName} id={icon.iconName} selectedOption={selectedPlatform} setSelectedOption={setSelectedPlatform} categoriesBar button />
                  )
                }
              })}
            </View>
            <Text></Text>
            <Formik validationSchema={newProjectValidationSchema} initialValues={initialValues} onSubmit={handleFormikSubmit}>
              {({ handleSubmit }) => {
                return (
                  <View style={styles.form}>
                    <FormikInputValue
                      name='title'
                      placeholder='Title'
                      setDisabled={setValidTitle}
                    />
                    <FormikInputValue
                      name='description'
                      placeholder='Description'
                      setDisabled={setValidDescription}
                      multiline={true}
                      numberOfLines={10}
                    />
                    <Button
                      onPress={handleSubmit}
                      title='Share it!'
                      disabled={buttonDisabled}
                    />
                    <Text style={{ color: 'red' }}>{submitError}</Text>
                  </View>
                )
              }}
            </Formik>
          </View>
        </View>

      }
    </View>
  )
}

export default CreateProjectPage