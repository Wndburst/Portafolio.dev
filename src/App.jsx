import Header from "./components/Header.jsx"
import Profile from "./components/Profile.jsx"
import Work from "./components/Work.jsx"
import About from './components/About.jsx'
import Projects from "./components/Projects.jsx"

function App() {

  return (
    <div className="portfolio">
      <Header/>
      <Profile/>
      <Work/>
      <Projects />
      <About/>
    </div>

  )
}

export default App
