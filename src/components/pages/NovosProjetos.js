import ProjectForm from '../project/ProjectForm';
import styles from './NovosProjetos.module.css'

function NovosProjetos (){
    return(
        <div className={styles.novoprojeto_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar o serviço</p>
            <ProjectForm />
        </div>
        
        )
}

export default NovosProjetos;