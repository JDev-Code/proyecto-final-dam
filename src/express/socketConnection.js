import { io } from "socket.io-client"
import {conn} from "./conn"

export const socket = io(conn)
