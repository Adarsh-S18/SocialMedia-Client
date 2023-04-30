// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import { useContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import AdminLogin from "./AdminPages/AdminLogin/AdminLogin";
import EditProfile from "./Components/EditProfile/EditProfile";
import Leftbar from "./Components/Leftbar/Leftbar";
import Navbar from "./Components/Navbar/Navbar";
import Notificationss from './Pages/Notificationss/Notificationss'
// import Notifications from "./Components/Notifications/Notifications";
import Rightbar from "./Components/Rightbar/Rightbar";
import { AuthContext } from "./Context/authContext";
import { DarkmodeContext } from "./Context/DarkmodeContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Friends from "./Pages/Friends/Friends";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import Error from './Pages/Error';
import './Style.scss'
import Messenger from './Pages/Messenger/Messenger';


function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkmodeContext)
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: 'flex' }}>
            <Leftbar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <Rightbar />
          </div>
        </div>
      </QueryClientProvider>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (<ProtectedRoute><Layout /></ProtectedRoute>),
      children: [
        {
          path: '/',
          element: <Home />
        }, {
          path: '/friends/:id',
          element: <Friends />
        },
        {
          path: '/notifications',
          element: <Notificationss />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }, {
          path: '/editprofile/:id',
          element: <EditProfile />
        },
        {
          path: "*",
          element: (
            <QueryClientProvider client={queryClient}>
              <Error />
            </QueryClientProvider>
          ),
        }
      ]
    },
    {
      path: '/login',
      element: currentUser ? <Navigate to='/' /> : <Login />
    }, 
    {
      path: "/messages",
      element: currentUser?<Messenger/>:<Navigate to="/login" />,
    },
    {
      path: '/signup',
      element: currentUser ? <Navigate to='/' /> : <Register />
    },
    {
      path: '/adminlogin',
      element: <AdminLogin />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
