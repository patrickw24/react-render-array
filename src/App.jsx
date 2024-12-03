import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BookList } from './Components/BookList'


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
