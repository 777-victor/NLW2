import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
    return(
        <article className="teacher-item">
                        <header>
                            <img src="https://avatars1.githubusercontent.com/u/59877368?s=460&u=7ac037f2fa198a5abcea41cfaf46ed404c046f64&v=4" alt="Victor Campos"/>
                            <div>
                                <strong>Victor Campos</strong>
                                <span>Química</span>
                            </div>
                        </header>

                        <p>
                            Entusias das melhores tecnologias de química avançada.
                        
                        <br/> <br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                        </p>
                        
                    <footer>
                        <p>Preço/Hora
                            <strong> R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article> 
    )
}

export default TeacherItem;