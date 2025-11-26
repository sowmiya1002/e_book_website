import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books.Jsx'
import Favorites from './components/Favorites'
import About from './components/About'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/Books' element={<Books/>}></Route>
       <Route path='/Favorites' element={<Favorites/>}></Route>
       <Route path='/About' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
