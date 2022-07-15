//Link do 'react-router-dom'
import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

//"to" para onde vai = "text" onde vai utilizar (texto dinâmico)
function LinkButton({to, text}){

    return(

        //"to" vai ser dinâmico e vai vir da props
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
    )
}

export default LinkButton;