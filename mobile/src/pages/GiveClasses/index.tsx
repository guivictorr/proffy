import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

const GiveClasses: React.FC = () => {

  const { goBack } = useNavigation();

  function handleGoBackToLanding(){
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" style={styles.content} source={giveClassesBgImage}>

        <Text style={styles.title}>Quer ser um proffy ?</Text>
        <Text style={styles.description}>
          Para começar, você precisa cadastrar como professor na nossa plataforma web.
        </Text>

      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleGoBackToLanding}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;