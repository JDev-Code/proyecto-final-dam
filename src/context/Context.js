import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-native"
import readUserInfo from "./readUserInfo"
import removeUserInfo from "./removeUserInfo"
import storeUserInfo from "./storeUserInfo"

const Context = React.createContext({})

export function AppContext ({ children }) {
  const [userContext, setUserContext] = useState()
  const [isContext, setIsContext] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const read = async () => {
      const data = await readUserInfo()
      setUserContext(data)
      setIsContext(true)
    }
    read()
  }, [])

  useEffect(() => {
    if (isContext) {
      const action = async () => {
        if (userContext === null) {
          await removeUserInfo()
        } else {
          await storeUserInfo(userContext)
        }
        history.push('/')
      }
      action()
    }
  }, [userContext, isContext])

  return <Context.Provider value={{ userContext, setUserContext }}>{children}</Context.Provider>
}

export default Context