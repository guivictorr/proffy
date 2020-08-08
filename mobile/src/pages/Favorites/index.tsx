import React, {useState, useEffect} from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([])
  
  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)

        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>

      <ScrollView 
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom:16,
        }}
        style={styles.teacherList}>
          {favorites.map((teacher:Teacher) => {
            return (
              <TeacherItem
                key={teacher.id}
                teacher={teacher}
                favorited
              />
            )
          })}
        </ScrollView>
    </View>
  );
}

export default Favorites;