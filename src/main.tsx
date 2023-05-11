import './global.css'
import 'virtual:fonts.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './components/App'
import Checkout from './components/Checkout'
import Success from './components/Success'

createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<Success />} path="/success" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
