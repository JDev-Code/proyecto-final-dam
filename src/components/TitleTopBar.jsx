import { useContext } from "react"
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native"
import CustomImage from "./CustomImage"
import Context from "../context/Context"
import getProjects from "../express/getProjects"
import StyledIcon from "./StyledIcon"
import StyledText from "./StyledText"
import { theme } from "../../theme"

function TitleTopBar ({ title }) {

  const context = useContext(Context)
  const { setSelectedWindow, setProjectsContext } = context

  function handleCreateProject () {
    setSelectedWindow('createProject')
  }

  function handleRefreshProjects () {
    getProjects().then(data => setProjectsContext(data.reverse()))
  }

  return (
    <View>
      {title !== 'projects'
        ?
        <View style={styles.noProjectsContainer}>
          <StyledText text={title} title />
        </View>
        :
        <View style={styles.projectsContainer}>
          <TouchableWithoutFeedback onPress={handleRefreshProjects}>
            <View style={styles.logo}>
              <CustomImage source={require('../../assets/logoWe.png')} projectsListPage />
            </View>
          </TouchableWithoutFeedback>
          <View>
            <TouchableWithoutFeedback onPress={handleCreateProject}>
              <View style={styles.createProjectButton}>
                <StyledIcon name={'plus'} type={'entypo'} plus />
                <StyledText text={"PROJECT"} custom={styles.customButton} subtitle />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  noProjectsContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: theme.colors.main,
    borderBottomWidth: .4
  },
  projectsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 15,
    marginBottom: 4,
  },
  logo: {
    width: '20%'
  },
  createProjectButton: {
    flexDirection: 'row',
    borderColor: theme.colors.main, 
    borderWidth: .4, 
    borderRadius: 7, 
    paddingHorizontal: 5, 
    paddingVertical: 2.5
  },
  customButton:{
    color: theme.colors.default
  }
})

export default TitleTopBar
