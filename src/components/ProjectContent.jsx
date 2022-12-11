import React, { useState, useEffect, useRef } from "react"
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView, Animated } from 'react-native'
import StyledText from "./StyledText"

function ProjectContent ({ description, show }) {

  const animate = useRef(new Animated.Value(0)).current
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    if (!firstLoad) {
      if (show) {
        Animated.timing(animate, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false
        }).start()
      } else {
        Animated.timing(animate, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }).start()
      }
    }
  }, [show])

  useEffect(() => {
    setFirstLoad(false)
  }, [firstLoad])

  const animatedInterpolateHeight = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 180]
  })

  const animatedInterpolatePaddingVertical = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 15]
  })

  const styles = StyleSheet.create({
    show: {
      padding: 3
    },
    general: {
      maxHeight: animatedInterpolateHeight,
      alignSelf: 'center',
      paddingVertical: animatedInterpolatePaddingVertical,
      paddingHorizontal: 10,
      width: '90%'
    },
    scroll: {
      paddingHorizontal: 10
    }
  })

  return (
    <Animated.View style={styles.general}>
      <ScrollView style={styles.scroll} nestedScrollEnabled={true} persistentScrollbar={true}>
        <TouchableWithoutFeedback>
          <View>
            <StyledText text={description} normal/>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Animated.View>

  )
}

export default ProjectContent