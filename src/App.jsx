import { useState } from "react"
import Navbar from './components/Navbar.jsx'


function App() {
  const [theme, setTheme] = useState('light')
  return <div>
    <h1>Theme is {theme}</h1>
    <Navbar theme= {theme} setTheme = {setTheme}></Navbar>

  </div>
}

export default App
