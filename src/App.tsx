import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Acomodacoes from "./pages/Acomodacoes/Acomodacoes";
import Galeria from "./pages/Galeria/Galeria";
import Eventos from "./pages/Eventos/Eventos";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acomodacoes" element={<Acomodacoes />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App;

