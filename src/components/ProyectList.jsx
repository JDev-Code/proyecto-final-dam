import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import ProjectItem from './ProjectItem'

function ProyectList ({ filter, projects }) {

  const [selectedProject, setSelectedProject] = useState('')
  const [chosenProjects, setChosenProjects] = useState(projects)

  useEffect(() => {
    let projectList = []
    if (filter === 'all') { 
      projectList = projects
    } else {
      projects.map(project => {
        if (project.platform === filter)
          projectList.push(project)
      })
    }
    setChosenProjects(projectList)
  }, [filter, projects])

  return (
    <View style={{ paddingBottom: 57 }}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 50 }}
        data={chosenProjects}
        ItemSeparatorComponent={() => { }}
        renderItem={({ item: project }) => {
          return (
            <ProjectItem project={project} setSelectedProject={setSelectedProject} selectedProject={selectedProject} />
          )
        }} />
    </View>
  )
}

export default ProyectList