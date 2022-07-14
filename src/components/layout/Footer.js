//IMPORTANDO REACT ICONS DE https://react-icons.github.io/react-icons/
//INSTALAÇÃO - npm install react-icons --save

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
        
                <li><FaFacebook /></li> {/*Mostrando ícone*/}
                <li><FaInstagram /></li> {/*Mostrando ícone*/}
                <li><FaLinkedin /></li> {/*Mostrando ícone*/}

            </ul>

            <p className={styles.copy_right}><span>Manager</span> &copy; 2022</p> {/*SINAL DE copyright*/}
        </footer>
    )
}

export default Footer;


