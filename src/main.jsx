import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './component/Error_Section/ErrorPage';
import Start_Section from './component/Start/Start_Section';
import LogIn_Section from './component/LogIn_Page/LogIn_Section';

import DashBoard from './component/DashBoard/DashBoard'
import Projects from './component/DashBoard/Projects';
import Task from './component/DashBoard/Task';
import Inbox from './component/DashBoard/Inbox';
import Setting from './component/DashBoard/Setting';
import MainDashBoard from './component/Layout/MainDashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start_Section></Start_Section>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
       {
       path: '/login',
       element: <LogIn_Section></LogIn_Section>

       }

    ]
  },

  //DashBoard
  {
    path: 'mainDashBoard',
    element: <MainDashBoard></MainDashBoard> ,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path:'dashBoard',
        element: <DashBoard></DashBoard>
      },
      {
        path: 'projects',
        element: <Projects></Projects>
      },
      {
        path: 'tasks',
        element: <Task></Task>
      },
      {
        path: 'inbox',
        element: <Inbox></Inbox>
      },
      {
        path: 'setting',
        element: <Setting></Setting>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='max-w-screen-xl   mx-auto mt-4 mb-4'>
          <RouterProvider router={router} />
        </div>
  </StrictMode>,
)
