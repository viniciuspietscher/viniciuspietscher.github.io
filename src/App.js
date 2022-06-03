import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
import Resume from "./components/Resume"

function App() {
  return (
    <div className='App'>
      <div className='content-wrap'>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
