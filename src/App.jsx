import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/home'
import Explore from './pages/explore'
import Contact from './pages/contact'
import About from './pages/About'
import Navbar from './pages/navbar'
import BackTop from './components/backtotop'
import Footer from './components/footer'

import { ThemeProvider, useTheme } from './context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className='flex absolute right-24 float-right mt-5 px-2 py-2 rounded text-white bg-lime-500 hover:bg-slate-700 transition-colors'
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <ThemeToggleButton />
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        <BackTop />
      </ThemeProvider>
    </>
  )
}

export default App
