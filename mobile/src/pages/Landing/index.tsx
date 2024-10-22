import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles';
import api from '../../services/api';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing: React.FC = () => {

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data
      setTotalConnections(total)
    })
  }, [])

  const navigation = useNavigation();

  function handleNavigationToGiveClasses(){
    navigation.navigate('GiveClasses')
  }

  function handleNavigationToStudyTabs(){
    navigation.navigate('StudyTabs')
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={landingImg} style={styles.banner} />
      </View>
    
      <View style={styles.landingContent}>
        <Text style={styles.title}>
          Seja bem vindo, {'\n'}
          <Text style={styles.titleBold}>O que deseja fazer ?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigationToStudyTabs}>
            <Image source={studyIcon}/>
            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>

          <RectButton 
          
            style={[styles.button, styles.buttonSecondary]}
            onPress={handleNavigationToGiveClasses}
            >
            <Image source={giveClassesIcon}/>
            <Text style={styles.buttonText}>Dar aulas</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          Total de {totalConnections} conexões já realizadas {' '}
          <Image source={heartIcon}/>
        </Text>
      </View>

    </View>
  );
}

export default Landing;