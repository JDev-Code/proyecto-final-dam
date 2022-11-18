

async function getProjects () {

  let fetchResponse = null

  await fetch('http://192.168.1.33:3000/getprojects', {
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