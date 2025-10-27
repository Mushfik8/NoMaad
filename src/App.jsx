import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import RegisterCTA from "./components/RegisterCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./components/Login";
import Signup from "./components/Signup"; // ✅ add this

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Gallery />
                <RegisterCTA />
                <Contact />
                <Footer />
                <ScrollToTop />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* ✅ Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
