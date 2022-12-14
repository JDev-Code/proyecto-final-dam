import React from "react";
import { StyleSheet, View } from 'react-native';
import icons from '../data/iconsData';
import StyledIcon from "./StyledIcon";

// Carga el icono correspondiente a cada proyecto
function ProjectPlatformIcon ({ id, platform }) {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 5
  }
})

export default ProjectPlatformIcon