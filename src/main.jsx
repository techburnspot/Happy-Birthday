import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import WelcomePage from './pages/welcomePage.jsx'

import MemoriesPage from './components/Memories/MemoriesPage.jsx'
import LoveLetterPage from './pages/LoveLetterPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}  errorElement={<h1>Something went wrong.</h1>}>
       <Route index element={<WelcomePage />} />
       <Route path="letter" element={<LoveLetterPage />} />
       <Route path="memories" element={<MemoriesPage />} />
       
    </Route>
  ))


createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}/>
  
)
