import { AppLayout } from '@containers/AppLayout'
import { Intro } from '@pages/Intro'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@styles/main.css'


const createRouter = () => {

  return createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Intro />,
          index: true,
        },
        // {
        //   path: 'skills',
        //   element: <Skills />,
        // },
        // {
        //   path: 'work',
        //   element: <Work />,
        // },
        // {
        //   path: 'contact',
        //   element: <Contact />,
        // },
      ],
    },
  ])
}

export default function App() {
  const router = createRouter();

  return router ? <RouterProvider router={router} /> : <div className='loading-message'>Loading...</div>
}
