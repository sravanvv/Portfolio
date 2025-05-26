import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import VmartPro from "./Components/VmartPro";
import Prductpro from "./Components/Prductpro";
import Utilspro from "./Components/Utilspro";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/VmartPro" element={<VmartPro />} />
            <Route path="/Prductpro" element={<Prductpro />} />
            <Route path="/Utilspro" element={<Utilspro />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;