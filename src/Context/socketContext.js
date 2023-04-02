import {createContext} from "react";
import { io } from "socket.io-client";
export const socket = io('wss://socket.hectrum.online')
export const SocketContext = createContext(); 