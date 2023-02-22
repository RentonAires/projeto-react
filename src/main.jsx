import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TemaProvider } from './contexts/tema'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemaProvider>
      <App />
    </TemaProvider>
  </React.StrictMode>,
)
