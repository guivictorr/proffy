import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{uri: 'https://github.com/guivictorr.png'}}/>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Guilherme Victor</Text>
          <Text style={styles.subject}>Física</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Olá, me chamo Guilherme Victor e estou atualmente no último ano do ensino médio e pretendo cursar a área de tecnologia. comecei a estudar programação no final do ano passado, hoje estou estudando exclusivamente ReactJS, React Native e NodeJS em geral e sonho em trabalhar nessa área algum dia
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={unfavoriteIcon}/>*/}
            <Image source={heartOutlineIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;