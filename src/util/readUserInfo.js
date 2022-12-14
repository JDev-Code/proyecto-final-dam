import AsyncStorage from '@react-native-async-storage/async-storage'

// Lee la información de usuario almacenada en local
async function readUserInfo () {

  try {
    const value = await AsyncStorage.getItem('myInfo')
    const jsonValue = value !== null ? JSON.parse(value) : null
    if (jsonValue !== null) {
      return (jsonValue)
    } else {
      return ('no-user')
    }
  } catch (e) {
    console.log('ERROR: ' + e);
    // error reading value
  }

}

export default readUserInfo