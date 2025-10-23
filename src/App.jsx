import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import NavBar from './Pages/NavBar'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import { use } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './Them.jsx'
//

const App = () => {
  const [theme]= useContext(ThemeContext);

  return (
    < div id='scroll-bar' className={`w-full h-screen  padding-4  overflow-y-scroll hide-scrollbar ${theme === 'light' ? 'bg-gray-500 text-gray-900' : 'bg-gray-800 text-white' } `} >
      <NavBar />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/product' element={<Product />} >
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        </Route>
       <Route path='/contact' element={<Contact />} />
       <Route path='/courses' element={<Courses/>}/>
       <Route path='/courses/:courseId' element={<CourseDetails/>}/>
     </Routes>
    </div>
  )
}

export default App