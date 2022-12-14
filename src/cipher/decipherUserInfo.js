import decipherAES from "./decipherAES"

// Descifra la información de un usuario cifrado en AES
function decipherUserInfo (data) {
  const myInfo = {
    id: decipherAES(data.id),
    username: decipherAES(data.username),
    identifier: decipherAES(data.identifier)
  }
   return myInfo
}

export default decipherUserInfo