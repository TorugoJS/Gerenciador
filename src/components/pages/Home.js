import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import savings from '../../img/good-verry-svgrepo-com.svg'


function Home (){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Gerenciador</span></h1>
            <p>Comece a gerenciar seus projetos</p>
            <LinkButton to="/novosprojetos" text= "Criar Projeto" />
            <img src={savings} alt="img"/>
        </section>
    )
}

export default Home;