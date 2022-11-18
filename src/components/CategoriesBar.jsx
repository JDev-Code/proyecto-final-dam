import React, { useState, useEffect } from "react"
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import icons from '../data/iconsData'
import StyledIcon from "./StyledIcon"
import BarTab from "./BarTab"

const styles = StyleSheet.create({
  text:{
    fontWeight: 'bold',
     marginHorizontal: 10, 
     fontSize: 18,
     color: 'white'
  },
  allSelected:{
    color: '#a260c0'
  }
})

function CategoriesBar ({selectedOption, setSelectedOption}) {
  
  function handlePressAll(){
    setSelectedOption('all')
  }

  const textStyle = [
    styles.text,
    selectedOption === 'all' && styles.allSelected
  ]

  return (
    <View style={{
      flexDirection: 'row', width: '100%', height: 40, borderBottomWidth: 1, borderBottomColor: '#3a3a3a',
      justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15
    }}>
      <TouchableWithoutFeedback key={'all'} id={'all'} onPress={handlePressAll}>
        <View>
          <Text style={textStyle}>ALL</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ flexDirection: 'row', maxWidth: '50%'}}>
        {icons.map((icon) => {
          if (icon.filter) {
            return (
              <BarTab name={icon.name} type={icon.type} key={icon.iconName} id={icon.iconName} selectedOption={selectedOption} setSelectedOption={setSelectedOption} categoriesBar />
            )
          }
        })}
      </View>
    </View>
  )
}

export default CategoriesBar