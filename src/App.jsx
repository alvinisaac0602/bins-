import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming you have Home.jsx
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Payments from "./pages/Payments";
import News from "./pages/News";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
