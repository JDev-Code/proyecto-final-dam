import React, { useState, useEffect } from "react"
import { View } from 'react-native'
import ProyectList from "../components/ProyectList"
import CategoriesBar from "../components/CategoriesBar"
import HeaderProjectBar from "../components/HeaderProjectBar"
import getProjects from "../express/getProjects"

function ProjectListPage () {
  const [selectedOption, setSelectedOption] = useState('all')
  const [projects, setProjects] = useState('')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    getProjects().then(data => setProjects(data))
    setIsReady(true)
  }, [])

  return (

    <View>
      <HeaderProjectBar />
      <CategoriesBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      {isReady ?
        <ProyectList filter={selectedOption} projects={projects} />
        :
        <View></View>
      }
    </View>



  )
}
export default ProjectListPage