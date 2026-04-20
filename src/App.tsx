import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Unlisted from './pages/Unlisted';
import Contact from './pages/Contact';
import Demat from './pages/Demat';
import Equity from './pages/Equity';
import Derivatives from './pages/Derivatives';
import Commodity from './pages/Commodity';
import MutualFunds from './pages/MutualFunds';
import IPO from './pages/IPO';
import NCD from './pages/NCD';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/unlisted" element={<Unlisted />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demat" element={<Demat />} />
            <Route path="/equity" element={<Equity />} />
            <Route path="/derivatives" element={<Derivatives />} />
            <Route path="/commodity" element={<Commodity />} />
            <Route path="/mutual-funds" element={<MutualFunds />} />
            <Route path="/ipo" element={<IPO />} />
            <Route path="/ncd" element={<NCD />} />
          </Routes>
        </div>
        <FloatingButtons />
        <Footer />
      </div>
    </Router>
  );
}
