import React, { useContext } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import ProjectPlatformIcon from "./ProjectPlatformIcon"
import Context from "../context/Context";
import StyledText from "./StyledText";
import StyledIcon from "./StyledIcon";


function ProjectHeader ({ id, platform, title, username, identifier, user_id }) {

  const context = useContext(Context)
  const { setSelectedChatContext, userContext, setSelectedWindow } = context

  function handlePress () {
    if (userContext.id !== user_id) {
      setSelectedChatContext({ id: user_id, username: username, identifier: identifier })
    } else {
      setSelectedWindow('profile')
    }
  }

  return (
    <View style={styles.container}>
      <ProjectPlatformIcon id={id} platform={platform} />
      <View>
        <StyledText text={title} custom={styles.customTitle} title />
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.user}>
            <StyledText text={username + ' #' + identifier} custom={styles.customSubtitle} subtitle />
            <StyledIcon name={'chatbox-ellipses-outline'} type={'ionicon'} projectChat/>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden'
  },
  customTitle: {
    fontSize: 18
  },
  customSubtitle: {
    fontSize: 15
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default ProjectHeader