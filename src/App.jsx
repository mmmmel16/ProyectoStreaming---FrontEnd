import { useState } from 'react'
import './App.css'
import './styles/navbar.css'
import '../src/index.css'
import Navbar from './layouts/navbar';
import Sidebar from './layouts/sidebar';


function App() {
  return (
    <>
      <div>
        <Sidebar />
        <Navbar />
      </div>
    </>
  )
}

export default App
