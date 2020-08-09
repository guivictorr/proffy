import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';

import giveClasses from '../../assets/images/icons/give-classes.png'
import giveClassesBackground from '../../assets/images/BackgroundGreen.png'
import secondPageIcon from '../../assets/images/icons/page2.png'
import rightArrowIcon from '../../assets/images/icons/rightarrow.png'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const IntroductionPage2: React.FC = () => {

  const navigation = useNavigation()

  function handleNavigationToNextIntroduction(){
    navigation.reset({
      index: 0,
      routes: [{ name: 'Landing' }],
    });
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerIcon}source={giveClasses}/>
        <Image style={styles.headerBackground}  source={giveClassesBackground}/>
      </View>

      <View style={styles.introductionTextContainer}>
        <Text style={styles.introductionNumber}>02.</Text>
        <Text style={styles.introductionText}>
          Ou dê aulas {"\n"}
          sobre o que você {"\n"}
          mais conhece
        </Text>

        <View style={styles.introductionFooter}>
          <Image source={secondPageIcon}/>
          <TouchableOpacity onPress={handleNavigationToNextIntroduction}>
            <Image source={rightArrowIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default IntroductionPage2;