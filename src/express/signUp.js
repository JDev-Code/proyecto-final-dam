
import cipherAES from '../helpers/cipherAES'
import decipherUserInfo from '../helpers/decipherUserInfo'

async function signUp (username, email, password) {

  let fetchResponse = null

  await fetch('http://192.168.1.33:3000/signUp', {
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
