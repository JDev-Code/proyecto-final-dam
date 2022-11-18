import cipherAES from "../helpers/cipherAES"
import decipherUserInfo from '../helpers/decipherUserInfo'


async function newProject (id, platform, title, description) {
  let fetchResponse = null

  await fetch('http://192.168.1.33:3000/newproject', {
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