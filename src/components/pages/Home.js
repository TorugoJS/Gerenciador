// COMPONENTE DA BARRA DE NAVEGAÇÃO

import styles from './Home.module.css'

import LinkButton from '../layout/LinkButton'

//importando img
import savings from '../../img/good-verry-svgrepo-com.svg'


function Home (){

    return(

        <section className={styles.home_container}>

            {/*Destacando "Gerenciador com span" */}
            <h1>Bem-vindo ao <span>Gerenciador</span></h1>
            <p>Comece a gerenciar seus projetos</p>

            {/*COMPONENTE DE BUTTON PARA CRIAR UM NOVO PROJETO*/}
            {/*Ao clicar no button vai para novos projetos e texto será "Criar projeto"*/}
            <LinkButton to="/novosprojetos" text= "Criar Projeto" />

            {/*Mostrando img na tela*/}
            <img src={savings} alt="img"/> 
        </section>
    )
}

export default Home;