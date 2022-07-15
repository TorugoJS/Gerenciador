
//LINK PARA REDIRECT
import { Link } from 'react-router-dom'

import Container from './Container';

import styles from './Navbar.module.css'

//IMPORTANDO LOGO DE IMG 
import logo from '../../img/costs_logo.png'

function Navbar() {

    return (
        //"nav" tag semântica HTML
        <nav className={styles.navbar}>

            <Container>
                  {/*Clicando na logo vai direto para HOME (página inicial)*/}
                <Link to="/"><img src={logo} alt="logo" />
                </Link>

                <ul className={styles.list}>

                    <li className={styles.item}><Link to="/">Home</Link></li>  {/*Link para navegar*/}

                    <li className={styles.item}><Link to="/projetos">Projetos</Link></li> {/*Link para navegar*/}

                    <li className={styles.item}><Link to="/empresa">Empresa</Link></li> {/*Link para navegar*/}

                    <li className={styles.item}><Link to="/contato">Contato</Link></li> {/*Link para navegar*/}
                  
                </ul>

            </Container>

        </nav>
    )
}

export default Navbar;