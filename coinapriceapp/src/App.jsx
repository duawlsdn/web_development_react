import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ loading, setLoading ] = useState(true);

  return (
    <div>
      <h1>Coin Price Tracker</h1>
      { loading ? 
      (<strong>Loading...🧭</strong>)
      :
      (<h1>Null</h1>)}
    </div>
  )
}

export default App
