import React, { useState, useEffect } from "react"
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import ProjectHeader from './ProjectHeader'
import ProjectContent from './ProjectContent'
import StyledIcon from "./StyledIcon"
import getProjects from "../express/getProjects"
import deleteProject from "../express/deleteProject"

// Crea el contenedor para cada uno de los proyectos
function ProjectItem ({ project, setSelectedProject, selectedProject, ...props }) {

  const [open, setOpen] = useState(false)
  const handleOnPress = () => { setOpen(!open) }

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

  function handleDeleteProject(){
    Alert.alert('DELETE', 'Are you sure? The deletion will be permanent and cannot be reversed.',[
      {
      text: 'Cancel', 
      onPress: () => {},
      style: 'cancel'
    },
    {
      text: 'Delete',
      onPress: async () => {
        await deleteProject(project.id)
        getProjects().then(projects => props.setProjects(projects))
      },
      style: 'destructive'
    }
  ])
  }

  return (
    <TouchableWithoutFeedback key={project.id} onPress={handleOnPress}>
      <View style={projectStyle} key={project.id}>
        <View style={styles.header}>
          <ProjectHeader {...project} />
          {
            props.isMine
              ?
              <TouchableWithoutFeedback onPress={handleDeleteProject}>
                <View>
                  <StyledIcon name={'trash'} type={'evilicon'} trash />
                </View>
              </TouchableWithoutFeedback>
              :
              <View></View>
          }
        </View>
        <ProjectContent {...project} show={open} selectedProject />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  android: {
    borderColor: '#728d6e',
    backgroundColor: '#46813c70'
  },
  ios: {
    borderColor: '#637280ff',
    backgroundColor: '#3d608170'
  },
  web: {
    borderColor: '#806161',
    backgroundColor: '#612f2f70'
  },
  all: {
    borderBottomWidth: 2,
    borderRadius: 0,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginTop: 10
  },
  header:{
    flexDirection:'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  }
})

export default ProjectItem