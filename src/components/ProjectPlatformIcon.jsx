import React from "react";
import { View } from 'react-native';
import icons from '../data/iconsData';
import StyledIcon from "./StyledIcon";


function ProjectPlatformIcon ({ id, platform }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
      {icons.map((icon) => {
        if (icon.iconName === platform + 'Icon') {
          return (
            <StyledIcon name={icon.name} type={icon.type} key={id} projectIcon/>
          )
        }
      })}
    </View>
  )
}

export default ProjectPlatformIcon