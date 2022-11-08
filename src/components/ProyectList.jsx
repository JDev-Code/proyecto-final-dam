import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import projects from '../data/projectData'
import ProjectItem from './ProjectItem'

function ProyectList () {

  const [selectedProject, setSelectedProject] = useState('')

  return (
    <View style={{ paddingBottom: 57 }}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 50 }}
        data={projects}
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