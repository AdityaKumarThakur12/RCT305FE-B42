import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context.jsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ChakraProvider> */}
   <AppProvider>
    {/* <ChakraProvider> */}
      <BrowserRouter>
        
          <App />
      </BrowserRouter>
      {/* </ChakraProvider> */}
    </AppProvider> 
    {/* </ChakraProvider> */}
  </StrictMode>,
)
