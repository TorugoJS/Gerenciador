//
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// IMPORTANDO COMPONENTES

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

      {/* BARRA DE NAVEGAÇÃO- Home, proj..*/}
      <Navbar /> 


      <Container customClass="min-height">

        <Routes> {/*ROUTES PARA DIZER ONDE VAI OPERAR*/}



          <Route exact path="/" element={<Home />} /> {/* NAVEGANDO NOS COMPONENTES, FAZENDO O REDIRECT*/}  {/*USANDO "EXACT" QUANDO O DESTINO FOR SOMENTE BARRA*/}
          <Route path="/contato" element={<Contato />} /> {/* NAVEGANDO NOS COMPONENTES, FAZENDO O REDIRECT*/}
          <Route path="/empresa" element={<Empresa />} /> {/* NAVEGANDO NOS COMPONENTES, FAZENDO O REDIRECT*/}
          <Route path="/projetos" element={<Projetos />} /> {/* NAVEGANDO NOS COMPONENTES, FAZENDO O REDIRECT*/}
          <Route path="/novosprojetos" element={<NovosProjetos />} /> {/* NAVEGANDO NOS COMPONENTES, FAZENDO O REDIRECT*/}
          <Route path="/projeto/:id" element={<Projeto />} />

        </Routes>

      </Container>

      <Footer /> {/*RODAPÉ*/}

    </Router>

  );
}

export default App;
