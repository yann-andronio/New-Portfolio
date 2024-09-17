import { Fragment } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css'
import About from './pages/about/About'

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<About/>} />
          

        </Routes>
      </BrowserRouter>

    </Fragment>
  )
}

export default App
