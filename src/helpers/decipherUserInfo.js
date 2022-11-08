import storeUserInfo from "../context/storeUserInfo"
import decipherAES from "./decipherAES"

function decipherUserInfo (data) {

  const myInfo = {
    id: decipherAES(data.id),
    username: decipherAES(data.username),
    identifier: decipherAES(data.identifier)
  }

  storeUserInfo(myInfo)
}

export default decipherUserInfo