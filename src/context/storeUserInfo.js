import AsyncStorage from '@react-native-async-storage/async-storage'

async function storeUserInfo (data) {

  try {
    const storeData = JSON.stringify(data)
    console.log('storeData: ' + storeData);
    await AsyncStorage.setItem('myInfo', storeData)

  } catch (e) {
    console.log('something went wrong saving user info');
  }

}

export default storeUserInfo