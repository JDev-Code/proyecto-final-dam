import cipherAES from "../cipher/cipherAES"
import {conn} from "./conn"


async function newProject (id, platform, title, description) {
  let fetchResponse = null

  await fetch(conn + '/newproject', {
    method: 'POST',
    body: JSON.stringify({
      id: cipherAES(id),
      platform: cipherAES(platform),
      title: cipherAES(title),
      description: cipherAES(description),
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    if (data.correct) {
      fetchResponse = true
    }
  }).catch(error => {
    console.log('ERROR: ' + error)
  })

  return fetchResponse
}

export default newProject