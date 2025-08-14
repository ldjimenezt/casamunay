import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cabins from './pages/Cabins'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound404 from './pages/NotFound404'
import ScrollToTop from './components/ScrollToTop'


const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <ScrollToTop />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/cabins' element={<Cabins />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App