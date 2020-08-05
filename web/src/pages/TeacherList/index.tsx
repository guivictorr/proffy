import React from 'react';

import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader page="Estudar" title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
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
          <Input type="time" title="Hora" id="time"/>
        </form>
      </PageHeader>
      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;