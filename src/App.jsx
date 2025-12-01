import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books.Jsx'
import Favorites from './components/Favorites'
import About from './components/About'
import Bookinfo from './components/Bookinfo'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path="/books" element={<Books/>} />
       <Route path='/Favorites' element={<Favorites/>}></Route>
       <Route path='/About' element={<About/>}></Route>
        <Route path='/books/:id' element={<Bookinfo/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
