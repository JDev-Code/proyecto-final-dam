import cipherAES from '../cipher/cipherAES'
import decipherUserInfo from '../cipher/decipherUserInfo'
import {conn} from "./conn"

// Llamada al servidor para registrar un nuevo usuario
async function signUp (username, email, password) {

  let fetchResponse = null

  await fetch(conn + '/signUp', {
    method: 'POST',
    body: JSON.stringify({
      username: cipherAES(username),
      email: cipherAES(email),
      password: cipherAES(password)
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then( data => {
    if (data.correct){
     fetchResponse = decipherUserInfo(data)
    }
  }).catch(error => {
    console.log('ERROR' + error)
    throw error
  })

  return fetchResponse
}

export default signUp
