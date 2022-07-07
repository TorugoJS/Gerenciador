import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';
import styles from './NovosProjetos.module.css'

function NovosProjetos() {

      const history = useNavigate()

    function createPost(project) {
        //initialize cost and services
        project.cost = 0 
        project.services = []


        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },

            body: JSON.stringify(project),
        })

            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                history('/projetos', {message: 'Projeto criado com sucesso!'})
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar o serviço</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>

    )
}

export default NovosProjetos;