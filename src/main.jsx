import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[90%] mx-auto bg-slate-600'>
    <React.StrictMode>
      <AuthProviders><RouterProvider router={router} /></AuthProviders>
    </React.StrictMode>,
  </div>
)
