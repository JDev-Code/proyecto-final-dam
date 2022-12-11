import React, { useContext } from 'react'
import { View, StyleSheet } from "react-native"
import icons from '../data/iconsData'
import BarTab from './BarTab'
import Context from '../context/Context'
import { theme } from '../../theme'

function AppBar () {
  const context = useContext(Context)
  const { selectedWindow, setSelectedWindow } = context

  return (
    <View style={styles}>
      {
        icons.map((icon) => {
          if (icon.appbar) {
            return (
              <BarTab
                name={icon.name} type={icon.type} key={icon.iconName} id={icon.iconName}
                selectedOption={selectedWindow} setSelectedOption={setSelectedWindow}
                appBar
              />
            )
          }
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  flexDirection: 'row',
  position: 'absolute',
  bottom: 0,
  backgroundColor: '#0f1518',
  width: '100%',
  justifyContent: 'space-around',
  borderTopWidth: .4,
  borderTopColor: theme.colors.main,
  height: 57
})

export default AppBar