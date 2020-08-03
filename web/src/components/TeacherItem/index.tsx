import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
        <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/55333929?s=460&u=ee19ecf53d37b8dfc4492d50293a46e6fa9df302&v=4" alt="Guilherme Victor"/>
            <div>
              <strong>
                Guilherme Victor
                <span>Física</span>
              </strong>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias.
            <br/>
            Apaixonado por física ja lançou 50 Falcon 9 em nome da SpaceX. 2 Astronautas para a Lua e uma colônia em Marte.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$500,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;