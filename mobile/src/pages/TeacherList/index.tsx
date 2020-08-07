import React from 'react';
import { View } from 'react-native';

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

const TeacherList: React.FC = () => {
  return (
    <View style={styles.container}>
        <PageHeader title="Proffys disponíveis"/>
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

export default TeacherList;