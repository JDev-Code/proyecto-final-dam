import React from "react"
import { GrApple } from "react-icons/gr";


function usePlatformIcon(platform){

  const icon = [
    platform === 'ios' && <GrApple />,
    platform === 'android' && <GrApple />,
    platform === 'web' && <GrApple />
  ]

  return (
    <GrApple />
  )
}

export default usePlatformIcon