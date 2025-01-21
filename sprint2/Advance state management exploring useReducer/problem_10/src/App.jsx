import './App.css'
import AddBook from './components/addBook'
import Filter from './components/filterBook'
import BookList from './components/bookList'

function App() {
  return (
    <div>
        <h1 style={{textAlign:"center", fontSize:"30px"}}>Welcome to the Books library</h1>
        <AddBook/>
        <Filter/>
        <BookList/>
    </div>
    
  )  
}

export default App
