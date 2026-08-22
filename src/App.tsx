import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Supply from './components/Supply'
import Process from './components/Process'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Supply />
        <Process />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
