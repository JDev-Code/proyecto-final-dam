import React, { useContext } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, DeviceEventEmitter } from 'react-native'
import CustomImage from '../components/CustomImage'
import StyledText from '../components/StyledText'
import TitleTopBar from '../components/TitleTopBar'
import Context from '../context/Context'
import { socket } from '../express/socketConnection'
import StyledIcon from '../components/StyledIcon'
import ProjectList from '../components/ProyectList'

// Página con la información de tu perfil personal
function ProfilePage () {
  DeviceEventEmitter.removeAllListeners('hardwareBackPress')

  const context = useContext(Context)
  const { userContext, setUserContext, projectsContext, setProjectsContext, setSelectedWindow } = context

  async function handleLogOut () {
    try {
      socket.emit('bye', userContext.id)
      setUserContext('delete')
    } catch (e) { }
  }

  function handleBackPress () {
    setSelectedWindow('project')
    DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  }

  DeviceEventEmitter.addListener('hardwareBackPress', handleBackPress)

  return (
    <View>
      <TitleTopBar title={'MY PROFILE'} />
      <View style={styles.cardContainer}>
        <CustomImage source={require('../../assets/defaultProfile.png')} myProfile />
        <View style={styles.myInfo}>
          <StyledText text={userContext.username + ' #' + userContext.identifier} custom={styles.customName} subtitle />
          <TouchableWithoutFeedback onPress={handleLogOut}>
            <View style={styles.logout}>
              <StyledText text='LOG OUT' error />
              <StyledIcon name={'log-out'} type={'entypo'} logout />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.projectsContainer}>
        <StyledText text={'MY PROJECTS'} custom={styles.myProjects} title />
        <ProjectList filter={'all'} projects={projectsContext} id={userContext.id} setProjects={setProjectsContext} myProjects />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 20,
    marginBottom: 50
  },
  myInfo: {
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  projectsContainer:{
    height: 500
  },
  myProjects: {
    marginLeft: 10,
    marginBottom: 5
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 85,
  },
  customName: {
    fontSize: 19
  }
})

export default ProfilePage