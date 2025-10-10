import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import RegisterCTA from './components/RegisterCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <RegisterCTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
