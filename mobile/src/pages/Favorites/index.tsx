import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>

      <ScrollView 
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom:16,
        }}
        style={styles.teacherList}>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
          <TeacherItem/>
        </ScrollView>
    </View>
  );
}

export default Favorites;