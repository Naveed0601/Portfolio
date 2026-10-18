import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Resume />
      <Contact />
      <footer>Mohd Abdul Naveed — © {new Date().getFullYear()}</footer>
    </>
  )
}
