import React from 'react';

import './styles.css'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/icons/warning.svg'

function TeacherForm(){
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      page="Dar aulas" 
      title="Que incrível que você quer dar aulas."
      description="O primeiro passo, é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input title="Nome completo" id="name"/>
          <Input title="Avatar" id="avatar"/>
          <Input title="Whatsapp" id="whatsapp" type="url"/>
          <TextArea title="Biografia" id="bio"/>
        </fieldset>

        <fieldset>
          <legend>Seus dados</legend>
          <Select 
            title="Matéria" 
            id="subject"
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
          <Input title="Custo da sua hora por aula" id="cost"/>
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>

          <div className="schedule-item">
            <Select 
              title="Dia da semana" 
              id="week_day"
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
            <Input id="from" title="Das" type="time"/>
            <Input id="to" title="Até" type="time"/>
          </div>
        </fieldset>
        
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>

      </main>
    </div>
  );
}

export default TeacherForm;