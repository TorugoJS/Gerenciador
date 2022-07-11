import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NovosProjetos from './components/pages/NovosProjetos';
import Empresa from './components/pages/Empresa';
import Projetos from './components/pages/Projetos';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projeto from './components/pages/Projeto';



function App() {
  return (
    <Router>
      <Navbar />


      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/novosprojetos" element={<NovosProjetos />}></Route>
          <Route path="/projeto/:id" element={<Projeto />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
