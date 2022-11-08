import cipherAES from "../helpers/cipherAES"
import decipherUserInfo from '../helpers/decipherUserInfo'


async function logIn (email, password) {

    await fetch('http://192.168.1.33:3000/login', {
      method: 'POST',
      body: JSON.stringify({
        email: cipherAES(email),
        password: cipherAES(password),
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      if (data.exists){
        decipherUserInfo(data)
      }
    }).catch(error => {
      console.log('ERROR' + error)
      throw error
    })
}

export default logIn