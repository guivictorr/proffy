import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import studyIcon from '../../assets/images/icons/study.png'
import giveClassesBackground from '../../assets/images/Background.png'
import firstPageIcon from '../../assets/images/icons/page1.png'
import rightArrowIcon from '../../assets/images/icons/rightarrow.png'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Introduction: React.FC = () => {

  const navigation = useNavigation()

  function handleNavigationToNextIntroduction(){
    navigation.navigate('IntroductionPage2')
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerIcon}source={studyIcon}/>
        <Image style={styles.headerBackground}source={giveClassesBackground}/>
      </View>

      <View style={styles.introductionTextContainer}>
        <Text style={styles.introductionNumber}>01.</Text>
        <Text style={styles.introductionText}>
          Encontre vários {"\n"}
          professores para {"\n"}
          ensinar você
        </Text>

        <View style={styles.introductionFooter}>
          <Image source={firstPageIcon}/>
          <TouchableOpacity onPress={handleNavigationToNextIntroduction}>
            <Image source={rightArrowIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Introduction;