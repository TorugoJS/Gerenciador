import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NovosProjetos from './components/pages/NovosProjetos';
import Empresa from './components/pages/Empresa';
import Projetos from './components/pages/Projetos';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router>
    <Navbar />


      <Container customClass ="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contato" element={<Contato />}></Route>
          <Route exact path="/empresa" element={<Empresa />}></Route>
          <Route exact path="/projetos" element={<Projetos />}></Route>
          <Route exact path="/novosprojetos" element={<NovosProjetos />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
