import { ThemeProvider} from './themeContext'
import './App.css'
import { Home } from './components/home'

function App() {
  return(
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  )
}

export default App
