import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import ProjectItem from './ProjectItem'
import StyledText from './StyledText'

function ProyectList ({ filter, projects, ...props }) {

  const [selectedProject, setSelectedProject] = useState('')
  const [chosenProjects, setChosenProjects] = useState(projects)

  useEffect(() => {
    let projectList = []
    if (props.myProjects) {
      if (projects !== null) {
        projects.map(project => {
          if (project.user_id === props.id){
            projectList.push(project)
          }
        })
      }
    } else {
      if (filter === 'all') {
        projectList = projects
      } else {
        if (projects !== null) {
          projects.map(project => {
            if (project.platform === filter)
              projectList.push(project)
          })
        }
      }
    }
    setChosenProjects([...projectList])
  }, [filter, projects])

  const styleList = [
    styles.list,
    props.myProjects && styles.myProjects
  ]

  return (
    <View style={{height: '90%'}}>
      {chosenProjects.length !== 0
        ?
        <FlatList
          contentContainerStyle={styleList}
          data={chosenProjects}
          ItemSeparatorComponent={() => { }}
          renderItem={({ item: project }) => {
            return (
              <ProjectItem project={project} setSelectedProject={setSelectedProject} selectedProject={selectedProject} setProjects={props.setProjects} isMine={props.myProjects}/>
            )
          }} />
        :
        <View style={styles.messageContainer}>
          <StyledText text={"NOT " + ((filter !== 'all') ? filter.toUpperCase() : "") + " PROJECTS YET"} subtitle />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 120
  },
  myProjects:{
    paddingBottom: 60
  },
  messageContainer: {
    alignItems: "center",
    height: '92%',
    justifyContent: 'center'
  }
})

export default ProyectList