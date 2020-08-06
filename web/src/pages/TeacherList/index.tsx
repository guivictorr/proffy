import React, {useState, FormEvent} from 'react';

import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList(){
  const [subject, setSubject] = useState('')
  const [week_day, setWeekday] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers]= useState([])

  

  async function searchTeachers(event: FormEvent){
    event.preventDefault()

    const response = await api.get('classes', {
      params : {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader page="Estudar" title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
            title="Matéria" 
            id="subject"
            value={subject}
            onChange={text => {setSubject(text.target.value)}}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Física', label: 'Física' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Português', label: 'Português' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Filosofia', label: 'Filosofia' },
            ]}
          />
          <Select 
            title="Dia da semana" 
            id="week_day"
            value={week_day}
            onChange={text => {setWeekday(text.target.value)}}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input 
          type="time" 
          title="Hora" 
          id="time"
          value={time}
          onChange={text => {setTime(text.target.value)}}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
  );
}

export default TeacherList;