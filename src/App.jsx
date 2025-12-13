import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Capabilities from './components/Capabilities'
import Impact from './components/Impact'
import VisionPotential from './components/VisionPotential'
import Contact from './components/Contact'
import Technology from './components/Technology'
import OurProduct from './components/OurProduct'
import SEO from './components/SEO'

function Home() {
  return (
    <>
      <SEO
        title="Ronna AI - Future of Intelligence"
        description="Ronna AI is pioneering the future of artificial intelligence with advanced automation and smart solutions."
        keywords="AI, Machine Learning, Automation, Future Tech, Ronna AI"
      />
      <Hero />
      <Mission />
      <Capabilities />
      <Impact />
      <VisionPotential />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={
            <>
              <SEO
                title="Technology"
                description="Explore the cutting-edge technology behind Ronna AI."
              />
              <Technology />
            </>
          } />
          <Route path="/ourproduct" element={
            <>
              <SEO
                title="Our Product"
                description="Discover Ronna AI's flagship products transforming industries."
              />
              <OurProduct />
            </>
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App
