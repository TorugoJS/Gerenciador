import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NovosProjetos from './components/pages/NovoProjeto';
import Empresa from './components/pages/Empresa';

import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/empresa">Contato</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/novosprojetos">NovosProjetos</Link>
      </div>


      <Container customClass ="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contato" element={<Contato />}></Route>
          <Route exact path="/empresa" element={<Empresa />}></Route>
          <Route exact path="/novosprojetos" element={<NovosProjetos />}></Route>
        </Routes>
      </Container>
      <footer>Footer</footer>
    </Router>

  );
}

export default App;
