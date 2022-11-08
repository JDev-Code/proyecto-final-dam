import React from "react"
import { View } from 'react-native'
import ProyectList from "../components/ProyectList"
import CategoriesBar from "../components/CategoriesBar"
import CreateProjectBar from "../components/CreateProjectBar"

function ProjectListPage () {
  return (
    <View>
      <CreateProjectBar />
      <CategoriesBar />
      <ProyectList />
    </View>
  )
}
export default ProjectListPage