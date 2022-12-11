import {  Image, StyleSheet } from "react-native"


function CustomImage ({ source, landingPage, projectsListPage, chatItem, currentChat, myProfile }) {

  const style = [
    landingPage && styles.landingPage,
    projectsListPage && styles.projectsListPage,
    chatItem && styles.chatItem,
    currentChat && styles.currentChat,
    myProfile && styles.myProfile,
    styles.general
  ]

  return (
    <Image
      style={style}
      source={source}
    />
  )
}

const styles = StyleSheet.create({
  landingPage: {
    width: '50%',
    marginBottom: 50
  },
  projectsListPage: {
    height: 30,
    width: '100%',
  },
  chatItem: {
    height: 45,
    width: 45,
    backgroundColor: '#dadada',
    borderRadius: 10,
    marginHorizontal: 15
  },
  currentChat: {
    height: 40,
    width: 40,
    backgroundColor: '#dadada',
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 10
  },
  myProfile: {
    height: 100,
    width: 100,
    backgroundColor: '#dadada',
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 10
  },
  general: {
    resizeMode: 'contain'
  }
})

export default CustomImage

