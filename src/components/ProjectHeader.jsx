import React from "react";
import { View, Text } from 'react-native'
import ProjectPlatformIcon from "./ProjectPlatformIcon"


function ProjectHeader ({ id, platform, title, username, identifier }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <ProjectPlatformIcon id={id} platform={platform} />
      <View>
        <Text>{title}</Text>
        <Text>{username}{identifier}</Text>
      </View>
    </View>
  )
}

export default ProjectHeader