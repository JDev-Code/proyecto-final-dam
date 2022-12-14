import cipherAES from "../cipher/cipherAES"
import decipherUserInfo from '../cipher/decipherUserInfo'
import {conn} from "./conn"

// Llamada al servidor para comprobar si un usuario existe y recuperar su información
async function logIn (email, password) {

  let fetchResponse = null

  await fetch(conn + '/login', {
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
    if (data.correct) {
      fetchResponse = decipherUserInfo(data)
    }
  }).catch(error => {
    console.log('ERROR: ' + error)
    throw error
  })

  return fetchResponse
}

export default logIn