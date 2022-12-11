import decipherAES from "./decipherAES"

function decipherUserInfo (data) {
  const myInfo = {
    id: decipherAES(data.id),
    username: decipherAES(data.username),
    identifier: decipherAES(data.identifier)
  }
   return myInfo
}

export default decipherUserInfo