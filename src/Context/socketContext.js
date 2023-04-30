import {createContext} from "react";
import { io } from "socket.io-client";
export const socket = io('https://socket.hectrum.online') //'ws://localhost:4000'
export const SocketContext = createContext(); 