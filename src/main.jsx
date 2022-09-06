import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LanguageContextProvider from './components/contexts/LanguageContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>
)
