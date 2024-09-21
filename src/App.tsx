import { Fragment, useState, useEffect } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';import './App.css'
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


      <Router>
      <Routes>
        <Route path="New-Portfolio" element={<About />} />
        <Route path="New-Portfolio/resume" element={<Resume />} />
        <Route path="New-Portfolio/portfolio" element={<Portfolio />} />
        <Route path="New-Portfolio/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </Fragment>
  )
}

export default App
