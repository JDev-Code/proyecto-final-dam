import React, { useState, useEffect } from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import ProjectHeader from './ProjectHeader'
import ProjectContent from './ProjectContent'

const styles = StyleSheet.create({
  android: {
    borderColor: '#60b155',
    backgroundColor: '#477241d0'
  },
  ios: {
    borderColor: '#2f77b9',
    backgroundColor: '#3d6081cc'
  },
  web: {
    borderColor: '#a03c3c',
    backgroundColor: '#8d3535cb'
  },
  all: {
    borderWidth: 3,
    borderRadius: 50,
    marginHorizontal: 20,
    color: 'white',
    padding: 10,
    margin: 5
  }
})

function ProjectItem ({ project, setSelectedProject, selectedProject }) {

  const [open, setOpen] = useState(false)
  const handleOnPress = () => { setOpen(!open)}

  const projectStyle = [
    project.platform === 'android' && styles.android,
    project.platform === 'ios' && styles.ios,
    project.platform === 'web' && styles.web,
    styles.all
  ]

  useEffect(() => {
    if (selectedProject != project.id) {
      setOpen(false)
    }
  }, [selectedProject])

  useEffect(() => {
    if (open) {
      setSelectedProject(project.id)
    }
  }, [open]);

  return (
    <TouchableWithoutFeedback key={project.id} onPress={handleOnPress}>
      <View style={projectStyle} key={project.id}>
        <ProjectHeader {...project} />
        <ProjectContent {...project} show={open} selectedProject />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ProjectItem