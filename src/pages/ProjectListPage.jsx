import React, { useState, useEffect, useContext } from "react"
import { View, DeviceEventEmitter, BackHandler } from 'react-native'
import ProyectList from "../components/ProyectList"
import CategoriesBar from "../components/CategoriesBar"
import getProjects from "../express/getProjects"
import TitleTopBar from "../components/TitleTopBar"
import Context from "../context/Context"

function ProjectListPage () {
  DeviceEventEmitter.removeAllListeners('hardwareBackPress')
  DeviceEventEmitter.addListener('hardwareBackPress', () => { BackHandler.exitApp() })

  const context = useContext(Context)
  const { projectsContext, setProjectsContext } = context

  const [selectedOption, setSelectedOption] = useState('all')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    getProjects().then(data => setProjectsContext(data.reverse()))
    setIsReady(true)
  }, [])

  return (
    <View>
      <TitleTopBar title={'projects'} />
      <CategoriesBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      {
        isReady && <ProyectList filter={selectedOption} projects={projectsContext} />
      }
    </View>

  )
}
export default ProjectListPage