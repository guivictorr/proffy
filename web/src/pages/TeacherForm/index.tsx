import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/icons/warning.svg'
import api from '../../services/api';

function TeacherForm(){
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    {week_day: 0, from: '', to: '',}
  ])

  const history = useHistory()
  
  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems, 
      {week_day: 0, from: '', to: ''}
    ])
  }

  function setScheduleItemValue(position: number, field: string, value: string){
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if(index === position){
        return {...scheduleItem, [field]: value}
      }
      return scheduleItem;
    })

    setScheduleItems(updatedScheduleItems)
  }

  function handleCreateClass(event: FormEvent){
    event.preventDefault()

    api.post('classes', {
      name,
      avatar,
      bio,
      subject,
      whatsapp,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    }).catch(() => {
      alert('Erro no cadastro')
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      page="Dar aulas" 
      title="Que incrível que você quer dar aulas."
      description="O primeiro passo, é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>
          <Input 
          title="Nome completo" 
          id="name" 
          value={name} 
          onChange={(text) => { setName(text.target.value) }}/>

          <Input 
          title="Avatar" 
          id="avatar" 
          value={avatar} 
          type="url"
          onChange={(text) => { setAvatar(text.target.value) }}/>
          
          <Input 
          title="Whatsapp" 
          id="whatsapp" 
          type="text"
          value={whatsapp}
          onChange={(text) => { setWhatsapp(text.target.value) }}
          />

          <TextArea 
          title="Biografia" 
          id="bio"
          value={bio}
          onChange={(text) => { setBio(text.target.value) }}
          />
        </fieldset>

        <fieldset>
          <legend>Seus dados</legend>
          <Select 
            title="Matéria" 
            id="subject"
            value={subject}
            onChange={(text) => { setSubject(text.target.value) }}
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
          <Input 
          title="Custo da sua hora por aula" 
          id="cost"
          value={cost}
          onChange={(text) => { setCost(text.target.value) }}
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button onClick={addNewScheduleItem} type="button">+ Novo horário</button>
          </legend>

          {scheduleItems.map((scheduleItem, index) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select 
                  title="Dia da semana" 
                  id="week_day"
                  value={scheduleItem.week_day}
                  onChange={text => setScheduleItemValue(index, 'week_day', text.target.value)}
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
                id="from" title="Das" 
                type="time"
                value={scheduleItem.from}
                onChange={text => setScheduleItemValue(index, 'from', text.target.value)} 
                />
                <Input 
                id="to" 
                value={scheduleItem.to}
                title="Até" 
                type="time"
                onChange={text => setScheduleItemValue(index, 'to', text.target.value)} 
                />

              </div>
            )
          })}
        </fieldset>
        
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="submit">
            Salvar cadastro
          </button>
        </footer>
      </form>
      </main>
    </div>
  );
}

export default TeacherForm;