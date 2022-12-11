import {conn} from "./conn"

async function deleteProject (id) {

  let fetchResponse = null

  await fetch(conn + '/deleteProject', {
    method: 'POST',
    body: JSON.stringify({
      id: id
    }),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then( data => {
    if (data.correct){
     fetchResponse = data.correct
    }
  }).catch(error => {
    console.log('ERROR' + error)
    throw error
  })

  return fetchResponse
}

export default deleteProject