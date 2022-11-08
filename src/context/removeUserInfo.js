import AsyncStorage from '@react-native-async-storage/async-storage'

async function removeUserInfo () {
  try {
    await AsyncStorage.removeItem('myInfo')
  } catch (e) {
    console.error('REMOVE: ' + e);  
  }
}

export default removeUserInfo