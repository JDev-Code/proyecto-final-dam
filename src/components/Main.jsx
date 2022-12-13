import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, DeviceEventEmitter } from 'react-native'
import Constants from 'expo-constants'
import { Route, Switch } from 'react-router-native'
import AppBar from './AppBar'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import ProjectListPage from '../pages/ProjectListPage'
import ChatsPage from '../pages/ChatsPage'
import ProfilePage from '../pages/ProfilePage'
import LandingPage from '../pages/LandingPage'
import CreateProjectPage from '../pages/CreateProjectPage'
import CurrentChatPage from '../pages/CurrentChatPage'
import { theme } from '../../theme'

function Main () {
  DeviceEventEmitter.removeAllListeners('hardwareBackPress')

  return (
    <>
      <StatusBar style={'light'} />
      <View style={styles.appContainer}>

        <Switch>
          <Route path='/landingPage' exact>
            <LandingPage />
          </Route>
          <Route path='/logIn' exact>
            <LogInPage />
          </Route>
          <Route path='/signUp' exact>
            <SignUpPage />
          </Route>
          <Route path='/createProject' exact>
            <CreateProjectPage />
          </Route>
          <Route path='/currentChat' exact>
            <CurrentChatPage />
          </Route>
          <Route path='/app'>

            <Switch>
              <View style={styles.insideContainer}>
                <Route path='/app/projects' exact>
                  <ProjectListPage />
                </Route>
                <Route path='/app/chats' exact>
                  <ChatsPage />
                </Route>
                <Route path='/app/myProfile' exact>
                  <ProfilePage />
                </Route>
                <AppBar />
              </View>
            </Switch>

          </Route>
        </Switch>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    backgroundColor: theme.colors.background
  },
  insideContainer: {
    height: '100%'
  }
})

export default Main