import cipherAES from "../cipher/cipherAES"
import {conn} from "./conn"

async function getUserInfo (id) {

  let fetchResponse = null

  await fetch(conn + '/getuserinfo', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'id': cipherAES(id)
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    if (data.correct) {
      fetchResponse = data.data 
    }
  }).catch(error => {
    console.log('ERROR: ' + error)
    throw error
  })

  return fetchResponse
}

export default getUserInfo