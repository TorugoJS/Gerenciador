import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from "../layout/Message"
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projetos.module.css'

function Projetos() {

    const [projetos, setProjetos] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProjetos(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.projetos_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/novosprojetos" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projetos.length > 0 && projetos.map((project) =>
                    <ProjectCard id={project.id} name={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                     />)}

            </Container>
        </div>


    )
}

export default Projetos;