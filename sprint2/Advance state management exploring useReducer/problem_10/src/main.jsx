import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from "react-redux"
import store from './redux/store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
         <App />
      </ChakraProvider>
    </Provider>
   
   
  </StrictMode>,
)
