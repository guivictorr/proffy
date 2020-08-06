import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import api from '../../services/api';

export interface Teacher {
  subject: string,
  cost: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  id: number,
}

interface TeachersItemProps {
  teacher: Teacher
}


const TeacherItem: React.FC<TeachersItemProps> = ({teacher}) => {

  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.id
    })
  }

  return (
        <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
              <strong>
                {teacher.name}
                <span>{teacher.subject}</span>
              </strong>
            </div>
          </header>

          <p>
            {teacher.bio}
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R${teacher.cost}</strong>
            </p>
            <a  
              onClick={createNewConnection} 
              href={`https://wa.me/${teacher.whatsapp}`}>

              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </a>
          </footer>
        </article>
  );
}

export default TeacherItem;