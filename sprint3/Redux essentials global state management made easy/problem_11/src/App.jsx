import { useEffect } from 'react'
import './App.css'
import {connect} from 'react-redux'
import { fetchData } from './redux/actions'

const App = ({fetchData, items, loading, error})=>{
  useEffect(()=>{
    fetchData();
  },[fetchData]);

  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error: {error}</p>
  }
  if (!Array.isArray(items)) {
    return <p>No items available.</p>;
}
  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state)=>({
  items: state.items,
  loading: state.loading,
  error: state.error,
})

const mapDispatchToProps = {
  fetchData,
}
export default connect(mapStateToProps. mapDispatchToProps)(App);