import { useLocation } from 'react-router-dom'

import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'

import styles from './Projetos.module.css'

function Projetos() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.projetos_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/novosprojetos" text= "Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>


    )
}

export default Projetos;