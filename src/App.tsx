import { Fragment, useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Resume from './pages/resume/Resume'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Error from "./pages/404/Error"
import Welcome from './components/welcome/Welcome'


function App() {

  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  useEffect(() => {

    document.body.classList.add('noscroll');

    const timerWelcome = setTimeout(() => {
      setShowWelcome(false);
      document.body.classList.remove('noscroll');
    }, 9500);

    return () => {
      clearTimeout(timerWelcome);
      document.body.classList.remove('noscroll');
    };
  }, []);

  return (
    <Fragment>

      {showWelcome && <Welcome />}


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </Fragment>
  )
}

export default App
