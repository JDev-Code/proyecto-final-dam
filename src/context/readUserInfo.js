import AsyncStorage from '@react-native-async-storage/async-storage'

async function readUserInfo () {
  try {
    const value = await AsyncStorage.getItem('myInfo')
    const jsonValue = value !== null ? JSON.parse(value) : null
    if (jsonValue !== null) {
      return true
    } else {
      return false
    }
  } catch (e) {
    console.log('ERROR: ' + e);
    // error reading value
  }
}

export default readUserInfo