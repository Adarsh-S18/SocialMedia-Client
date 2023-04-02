import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkmodeContextProvider } from './Context/DarkmodeContext';
import { AuthContextProvider } from './Context/authContext';
import { socket, SocketContext } from './Context/socketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SocketContext.Provider value={socket}>
    <DarkmodeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkmodeContextProvider>
    </SocketContext.Provider>
);


