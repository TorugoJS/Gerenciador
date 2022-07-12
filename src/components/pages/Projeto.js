import styles from './Projeto.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'

function Projeto() {


    const { id } = useParams()

    const [projeto, setProjeto] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

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

    function editPost(projeto) {

        setMessage('')
        //budget validation
        if (projeto.budget < projeto.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('Error')
            return false
        }

        fetch(`http://localhost:5000/projects/${projeto.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projeto),
        })
            .then(resp => resp.json())
            .then((data) => {

                setProjeto(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado!')
                setType('success')

            })
            .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }


    return (<>
        {projeto.name ?
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message} />}
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
                                <ProjectForm handleSubmit={editPost}
                                    btnText="Concluir edição"
                                    projectData={projeto} />
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? `Adicionar serviço` : 'Fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (<div>Formulário do serviço</div>)}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                            <p>itens de serviços</p>
                    </Container>
                </Container>

            </div> : (<Loading />)}</>)
}

export default Projeto;