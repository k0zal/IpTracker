import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import Information from './Information'
import Map from './Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header />
     <Information />
     <Map />
    </div>
  )
}

export default App
