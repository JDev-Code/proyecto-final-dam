import React, { useState, useEffect, useRef } from "react"
import { Text, StyleSheet, TouchableWithoutFeedback, ScrollView, Animated } from 'react-native'

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
    outputRange: [0, 250]
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
      height: animatedInterpolateHeight,
      alignSelf: 'center',
      paddingVertical: animatedInterpolatePaddingVertical,
      paddingHorizontal: 10
    }
  })

  const display = [
    styles.general,
  ]

  return (
    <Animated.View style={display}>
      <ScrollView style={{ paddingHorizontal: 10 }} nestedScrollEnabled={true} persistentScrollbar={true}>
        <TouchableWithoutFeedback>
          <Text style={{ textAlign: "justify" }}>{description}</Text>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Animated.View>

  )
}

export default ProjectContent