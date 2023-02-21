import React from 'react'
import './App.css'
// import ListContainer from './Components/ListContainer/ListContainer'
import Navbar from './Components/Navbar/Navbar'
import ListContainer from './Components/ListContainer/ListContainer'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ListContainer/>
      <Footer/>
    </div>
  )
}

export default App
