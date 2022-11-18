import { useContext } from "react"
import decipherAES from "./decipherAES"
import Context from "../context/Context"

function decipherUserInfo (data) {
  console.log('3');

  const myInfo = {
    id: decipherAES(data.id),
    username: decipherAES(data.username),
    identifier: decipherAES(data.identifier)
  }
   return myInfo
}

export default decipherUserInfo