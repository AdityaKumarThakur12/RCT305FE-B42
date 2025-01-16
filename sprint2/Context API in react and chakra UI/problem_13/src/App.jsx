import { AuthProvider } from './authContext';
import Navbar from './components/navbar';
import Main from './components/home';
import Footer from './components/footer';

import './App.css'

function App() {
  return (
    <AuthProvider>
        <div className="app">
            <Navbar />
            <Main />
            <Footer />
        </div>
    </AuthProvider>
);
}

export default App
