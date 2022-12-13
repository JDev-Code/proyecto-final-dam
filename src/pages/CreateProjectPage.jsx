import BackBar from "../components/BackBar"
import FormikInputValue from "../components/FormikInputValue"
import React, { useState, useEffect, useContext } from 'react'
import { Formik } from 'formik'
import { Pressable, View, StyleSheet, ScrollView } from 'react-native'
import { theme } from "../../theme"
import { newProjectValidationSchema } from "../validationSchemas/newProject"
import BarTab from "../components/BarTab"
import icons from '../data/iconsData'
import newProject from "../express/newProject"
import Context from "../context/Context"
import formatText from "../util/formatText"
import StyledText from "../components/StyledText"

const initialValues = {
  title: '',
  platform: '',
  description: ''
}

const headerProps = {
  title: 'Share your project idea!',
  to: 'project'
}

function CreateProjectPage () {

  const context = useContext(Context)
  const { userContext, setSelectedWindow } = context

  const [validTitle, setValidTitle] = useState(false)
  const [validDescription, setValidDescription] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [isCreated, setIsCreated] = useState()
  const [buttonStyle, setButtonStyle] = useState([styles.button, styles.buttonDisabled])

  useEffect(() => {
    if (validDescription && validTitle && selectedPlatform !== '') {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [validTitle, validDescription, selectedPlatform])

  async function handleFormikSubmit ({ title, description }) {
    if (!buttonDisabled) {
      setIsCreated('')
      let formatedDescription = formatText(description)
      let formatedTitle = formatText(title)
      if ((formatedDescription.length >= 20) && (formatedTitle.length >= 3)) {
        setIsCreated(await newProject(userContext.id, selectedPlatform, formatedTitle, formatedDescription))
      }
    }
  }

  useEffect(() => {
    isCreated === false ? 
    setSubmitError('Something went wrong. Try again later!')
    : 
    setSubmitError('')
  }, [isCreated])

  useEffect(() => {
    if (buttonDisabled) {
      setButtonStyle([styles.button, styles.buttonDisabled])
    } else {
      setButtonStyle([styles.button, styles.buttonEnabled])
    }
  }, [buttonDisabled])

  useEffect(() => {
    if (isCreated) {
      setTimeout(() => {
        if (isCreated) {
          setSelectedWindow('project')
        }
      }, 1500)
    }
  }, [isCreated])

  return (
    <View>
      <BackBar title={headerProps.title} to={headerProps.to} />
      {isCreated ?
        <View style={styles.successMsgContainer}>
          <StyledText text={"PROJECT ADDED SUCCESSFULLY!"} success />
        </View>
        :
        <View style={styles.formContainer}>
          <ScrollView contentContainerStyle={styles.scroll}>
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
                      <Pressable style={buttonStyle} onPress={handleSubmit}>
                        <StyledText text={'SHARE IT'} custom={styles.customButtonText} normal />
                      </Pressable>
                      <StyledText text={submitError} error />
                    </View>
                  )
                }}
              </Formik>
            </View>
          </ScrollView>
        </View>
      }
    </View >
  )
}

const styles = StyleSheet.create({
  successMsgContainer: {
    height: '92%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    justifyContent: 'center'
  },
  scroll: {
    justifyContent: "center",
    height: '92%'
  },
  form: {
    marginHorizontal: '10%',
    justifyContent: 'center'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: '6%',
    marginTop: 5,
    marginBottom: 30
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

export default CreateProjectPage