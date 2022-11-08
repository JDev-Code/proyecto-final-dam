import React from 'react'
import {StatusBar} from 'expo-status-bar'
import { View, Text } from 'react-native'
import Constants from 'expo-constants'
import { Route, Switch, useHistory } from 'react-router-native'
import AppBar from './AppBar'
import LogInPage from '../pages/LogIn'
import SignUpPage from '../pages/SignUp'
import ProjectListPage from '../pages/ProjectList'
import ChatPage from '../pages/Chats'
import Profile from '../pages/Profile'
import readUserInfo from '../context/readUserInfo'


function Main () {
  return (
    <>
      <StatusBar style={'light'} />
      <View style={{ paddingTop: Constants.statusBarHeight, height: '100%', backgroundColor: '#0c0c0c' }}>
        <Switch>
          <Route path='/' exact>
            <LogInPage />
          </Route>
          <Route path='/signUp' exact>
            <SignUpPage />
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