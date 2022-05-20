import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
import Resume from "./components/Resume"
import Websites from "./components/Websites"

function App() {
  return (
    <div className='App'>
      <div className='content-wrap'>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/websites' element={<Websites />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
