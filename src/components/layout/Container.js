import styles from './Container.module.css'

//ALTERANDO ITENS COM PROPS
function Container(props)  {
    return (
        <div
        //UTILIZANDO {props.children} PARA DIZER QUE TERÃO FILHOS NA DIV PAI, ENCAPSULANDO DENTRO DO COMPONENTE.
        //ULITAZANDO "min-height" com "customClass", será enviada quando for necessária.
        //"customClass" será uma classe css para estilizar algumas partes do código
        className={`${styles.container} ${styles[props.customClass]}`}>{props.children}
         

        </div>
    )
}

export default Container;