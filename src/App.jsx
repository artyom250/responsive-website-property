import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Gallery from "./components/Gallery";
import Plan from './components/Plan';
import Features from './components/Features';
import Realtor from './components/Realtor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Overview />
      <Gallery />
      <Plan />
      <Features />
      <Realtor />
      <Footer />
    </div>
  )
}

export default App
