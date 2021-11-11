import { useState } from 'react'
import './App.css'
import Header from './Header'
import Information from './Information'
import Map from './Map'

function App() {
  return (
    <div className="App">
     <Header />
     <Information />
     <Map />
    </div>
  )
}

export default App
