import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [week_day, setWeekday] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers]= useState([])

  const [favorites, setFavorites] = useState<number[]>([])
  
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })

        setFavorites(favoritedTeachersIds)
      }
    })
  }

  function handleToggleFilterIsVisible(){
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFilterSubmit(){
    loadFavorites()
    const response = await api.get('classes', {
      params : {
        subject,
        week_day,
        time
      }
    })
    setIsFiltersVisible(!isFiltersVisible)

    setTeachers(response.data)
  }

  function FilterButton(){
    return (
      <BorderlessButton onPress={handleToggleFilterIsVisible}>
        <Feather name="filter" size={20} color="#fff"/>
      </BorderlessButton>
    )
  }

  return (
    <View style={styles.container}>
        <PageHeader title="Proffys disponíveis" headerRight={<FilterButton/>}>
          {isFiltersVisible && (
            (
              <View style={styles.searchForm}>
                <Text style={styles.label}>Matéria</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="O que estudar ?" 
                  value={subject} 
                  onChangeText={text => setSubject(text)}
                />
        
                <View style={styles.inputGroup}>
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da semana</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder="Que dia ?"
                      value={week_day} 
                      onChangeText={text => setWeekday(text)}
                    />
                  </View>
        
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder="Que horas ?"
                      value={time} 
                      onChangeText={text => setTime(text)}
                    />
                  </View>
                </View>
        
                <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                  <Text style={styles.submitButtonText}>Buscar proffys</Text>
                </RectButton>
              </View>
              )
          )}
        </PageHeader>
        <ScrollView 
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom:16,
        }}
        style={styles.teacherList}>
          {teachers.map((teacher: Teacher) => (
            <TeacherItem 
            key={teacher.id} 
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
            />
          ))}
        </ScrollView>
    </View>
  );
}

export default TeacherList;