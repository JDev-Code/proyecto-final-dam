import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import Constants from 'expo-constants'
import { Route, Switch } from 'react-router-native'
import AppBar from './AppBar'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import ProjectListPage from '../pages/ProjectListPage'
import ChatPage from '../pages/ChatPage'
import Profile from '../pages/ProfilePage'
import LandingPage from '../pages/LandingPage'
import CreateProjectPage from '../pages/CreateProjectPage'


function Main () {
  return (
    <>
      <StatusBar style={'light'} />
      <View style={{ paddingTop: Constants.statusBarHeight, height: '100%', backgroundColor: '#0c0c0c' }}>

        <Switch>
          <Route path='/' exact>
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
          <Route path='/app'>

            <Switch>
              <View style={{ height: '100%' }}>
                <Route path='/app/projects' exact>
                  <ProjectListPage />
                </Route>
                <Route path='/app/chats' exact>
                  <ChatPage />
                </Route>
                <Route path='/app/myProfile' exact>
                  <Profile />
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

export default Main