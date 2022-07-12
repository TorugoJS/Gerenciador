import styles from './Projeto.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectCard from '../project/ProjectCard'

function Projeto() {


    const { id } = useParams()

    const [projeto, setProjeto] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(resp => resp.json())
                .then((data) => {
                    setProjeto(data)
                })
                .catch(err => console.log)
        }, 1000)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }


    return (<>
        {projeto.name ?
            <div className={styles.project_details}>
                <Container customClass="column">
                    <div className={styles.details_container}>
                        <h1>Projeto: {projeto.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? `Editar projeto` : 'Fechar'}
                        </button>

                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {projeto.category.name}
                                </p>
                                <p>
                                    <span>Total de orçamento:</span> R${projeto.budget}
                                </p>
                                <p>
                                    <span>Total utilizado:</span> R${projeto.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <p>Detalhes do projeto</p>
                            </div>
                        )}
                    </div>
                </Container>

            </div> : (<Loading />)}</>)
}

export default Projeto;