import React from "react"
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import icons from '../data/iconsData'
import BarTab from "./BarTab"
import StyledText from "./StyledText"
import { theme } from "../../theme"


// Crea la barra con las categorías de los proyectos
function CategoriesBar ({selectedOption, setSelectedOption}) {
  
  function handlePressAll(){
    setSelectedOption('all')
  }

  const textStyle = [
    styles.text,
    selectedOption === 'all' && styles.allSelected
  ]

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback key={'all'} id={'all'} onPress={handlePressAll}>
        <View>
          <StyledText text={'ALL'} custom={textStyle}/>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.tabsContainer}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    width: '100%', 
    height: 40, 
    borderBottomWidth: .4, 
    borderBottomColor: theme.colors.main,
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 15
  },
  tabsContainer: {
    flexDirection: 'row', 
    maxWidth: '50%'
  },
  text:{
    fontWeight: 'bold',
     marginHorizontal: 10, 
     fontSize: 18,
     color: theme.colors.default
  },
  allSelected:{
    color: theme.colors.main
  }
})

export default CategoriesBar