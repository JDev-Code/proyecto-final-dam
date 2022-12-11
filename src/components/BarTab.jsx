import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { theme } from '../../theme';
import StyledIcon from './StyledIcon';

function BarTab ({ name, type, id, selectedOption, setSelectedOption, ...props }) {

  const [selected, setSelected] = useState(false)

  useEffect(() => {
    selectedOption+'Icon' === id ? setSelected(true) : setSelected(false)
  }, [selectedOption])

  function handleOnPress () {
    setSelectedOption(id.replace('Icon', ''))
  }

  const style = [
    props.appBar && styles.appBar,
    props.categoriesBar && styles.categoriesBar,
    props.button && styles.button
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

const styles = StyleSheet.create({
  appBar: {
    paddingVertical: 10,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoriesBar: {
    marginLeft: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BarTab

