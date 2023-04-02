// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import { useContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import AdminDashboard from "./AdminPages/AdminDashboard/AdminDashboard";
import AdminLogin from "./AdminPages/AdminLogin/AdminLogin";
import AllPosts from "./AdminPages/AllPosts/AllPosts";
import AllUsers from "./AdminPages/AllUsers/AllUsers";
import Reports from "./AdminPages/Reports/Reports";
import AdminSidebar from "./Components/AdminSidebar/AdminSidebar";
import EditProfile from "./Components/EditProfile/EditProfile";
import Leftbar from "./Components/Leftbar/Leftbar";
import Navbar from "./Components/Navbar/Navbar";
import Notifications from "./Components/Notifications/Notifications";
import Rightbar from "./Components/Rightbar/Rightbar";
import { AuthContext } from "./Context/authContext";
import { DarkmodeContext } from "./Context/DarkmodeContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Friends from "./Pages/Friends/Friends";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
// import Message from "./Pages/Messages/Message";
import Message from './Components/Message/Message';
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

  // const AdminLayout = () => {
  //   return (
  //     <div style={{ display: 'flex' }}>
  //       <AdminSidebar />
  //       <div style={{ flex: 8 }} >
  //         <Outlet />
  //       </div>
  //     </div>
  //   )
  // }

  // const MessageLayout = () => {
  //   return (
  //     <div className={`theme-${darkMode ? "dark" : "light"}`}>
  //       <Navbar />
  //       <div style={{ display: 'flex' }}>
  //         <Leftbar />
  //         <div style={{ flex: 9 }}>
  //           <Outlet />
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children;
  }

  const router = createBrowserRouter([
    // {
    //   path: '/dashboard',
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       path: '/dashboard',
    //       element: <AdminDashboard />
    //     },
    //     {
    //       path: '/dashboard/allusers',
    //       element: <AllUsers />
    //     },
    //     {
    //       path: '/dashboard/allposts',
    //       element: <AllPosts />
    //     },
    //     {
    //       path: '/dashboard/reports',
    //       element: <Reports />
    //     },
    //   ]
    // },
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
          element: <Notifications />
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
    // {
    //   path: '/messages',
    //   element: <ProtectedRoute><MessageLayout /></ProtectedRoute>,
    //   children: [
    //     {
    //       path: '/messages',
    //       element: currentUser ? <Navigate to='/login' /> : <Navigate to='/messages' />,
    //     },
    //   ]
    // },
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
