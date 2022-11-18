import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { Link, useHistory } from 'react-router-native'
import icons from '../data/iconsData'
import BarTab from './BarTab'

const styles = StyleSheet.create({
  flexDirection: 'row',
  position: 'absolute',
  bottom: 0,
  backgroundColor: '#0c0c0c',
  width: '100%',
  justifyContent: 'space-around',
  borderTopWidth: 1,
  borderTopColor: '#3a3a3a',
})

function AppBar () {

  const [selectedOption, setSelectedOption] = useState('project')

  const history = useHistory()
  useEffect(() => {
    if (selectedOption === 'project') history.push('/app/projects')
    if (selectedOption === 'chat') history.push('/app/chats')
    if (selectedOption === 'profile') history.push('/app/myProfile')
  }, [selectedOption]);

  return (
    <View style={styles}>
      {
        icons.map((icon) => {
          if (icon.appbar) {
            return (
                <BarTab name={icon.name} type={icon.type} key={icon.iconName} id={icon.iconName} selectedOption={selectedOption} setSelectedOption={setSelectedOption} appBar />
            )
          }
        })
      }
    </View>
  )
}

export default AppBar