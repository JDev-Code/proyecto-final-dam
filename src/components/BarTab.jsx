import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import StyledIcon from './StyledIcon';

const styles = StyleSheet.create({
  appBar: {
    paddingVertical: 10,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoriesBar: {
    marginHorizontal: 5
  }
})

function BarTab ({ name, type, id, selectedOption, setSelectedOption, ...props }) {

  const [selected, setSelected] = useState(false)

  useEffect(() => {
    selectedOption === id ? setSelected(true) : setSelected(false)
  }, [selectedOption])

  function handleOnPress () {
    setSelectedOption(id)
  }

  const style = [
    props.appBar && styles.appBar,
    props.categoriesBar && styles.categoriesBar
  ]

  let appBar, categoriesBar
  props.appBar ? appBar = true : appBar = false
  props.categoriesBar ? categoriesBar = true : categoriesBar = false

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={style}>
        <StyledIcon name={name} type={type} selected={selected} categoriesBar={categoriesBar} appBar={appBar} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BarTab

/**
 *     <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={style}>
        <StyledIcon name={name} type={type} selected={selected} categoriesBar={categoriesBar} appBar={appBar}/>
      </View>
    </TouchableWithoutFeedback>
 */
