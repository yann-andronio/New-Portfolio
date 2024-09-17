import { Fragment } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Resume from './pages/resume/Resume'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>

    </Fragment>
  )
}

export default App
