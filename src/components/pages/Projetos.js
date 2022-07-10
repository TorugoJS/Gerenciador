import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Message from "../layout/Message"
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projetos.module.css'

function Projetos() {

    const [projetos, setProjetos] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projetoMensagem, setProjetoMensagem] = useState ('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setProjetos(data)
                    setRemoveLoading(true)
                })
                .catch(err => console.log(err))
        }, 300);
    }, [])

    function removeProjeto(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(() => {
            setProjetos(projetos.filter((projetos)=> projetos.id !== id))
            setProjetoMensagem('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.projetos_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/novosprojetos" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            {projetoMensagem && <Message type="success" msg={projetoMensagem} />}
            <Container customClass="start">
                {projetos.length > 0 && projetos.map((project) =>
                    <ProjectCard id={project.id} name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProjeto}
                    />)}
                {!removeLoading && <Loading />}
                {removeLoading && projetos.length === 0 &&
                    <p>Não há projetos cadastrados!</p>
                }
            </Container>
        </div>


    )
}

export default Projetos;