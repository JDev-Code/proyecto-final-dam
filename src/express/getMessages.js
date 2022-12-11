import cipherAES from "../helpers/cipherAES"
import {conn} from "./conn"

async function getMessages (id) {
  let fetchResponse = []

  await fetch(conn + '/getmessages', {
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

export default getMessages