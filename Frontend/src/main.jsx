import react from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import AuthContext from './context/AuthContext.jsx'
import Usercontext from './context/Usercontext.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <AuthContext>
    <Usercontext>
      <App />
    </Usercontext>
  </AuthContext>
</BrowserRouter>

)
