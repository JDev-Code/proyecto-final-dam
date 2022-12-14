import { io } from "socket.io-client"
import {conn} from "./conn"

// Creación de conexion por sockets
export const socket = io(conn)
