import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ProcurementSupply from './pages/ProcurementSupply'
import CleaningServices from './pages/CleaningServices'
import WhyChooseUs from './pages/WhyChooseUs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="procurement-supply" element={<ProcurementSupply />} />
        <Route path="cleaning-services" element={<CleaningServices />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
