import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TemplateSPA from "./pages/TemplateSPA";
import Cadastro from "./pages/Cadastro";
import Agendamento from "./pages/Agendamento";
import Login from './pages/Login';
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="alturaMinima">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Agendamento" element={<Agendamento />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/TrocarSenha" element={<TrocarSenha/>} />
          
        </Routes>
      </Container>
      <Footer />
    </Router>
  )}

  export default App
