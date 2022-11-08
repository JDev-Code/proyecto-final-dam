import React from "react";
import { View, Text } from 'react-native'
import ProjectPlatformIcon from "./ProjectPlatformIcon"


function ProjectHeader ({ id, platform, title, owner }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <ProjectPlatformIcon id={id} platform={platform} />
      <View>
        <Text>{title}</Text>
        <Text>{owner}</Text>
      </View>
    </View>
  )
}

export default ProjectHeader