import {conn} from "./conn"

async function getProjects () {

  let fetchResponse = []

  await fetch(conn + '/getprojects', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    if (data.correct) {
      fetchResponse = data.data
    }
  }).catch(error => {
    console.log('ERROR GETTING PROJECTS: ' + error)
    throw error
  })

  return fetchResponse
}

export default getProjects