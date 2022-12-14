import AsyncStorage from '@react-native-async-storage/async-storage'

// Borra la información de usuario almacenada en local
async function removeUserInfo () {
  try {
    await AsyncStorage.removeItem('myInfo')
  } catch (e) {
    console.error('REMOVE: ' + e);  
  }
}

export default removeUserInfo