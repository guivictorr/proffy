import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import { View, Image, Text, Linking } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';
import api from '../../services/api';

export interface Teacher {
  subject: string,
  cost: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
  id: number,
}

interface TeacherProps {
  teacher: Teacher
  favorited: boolean
}

const TeacherItem: React.FC<TeacherProps> = ({teacher, favorited}) => {

  const [isFavorited, setIsFavorited] = useState(favorited)

  function handleLinkToWhatsapp(){
    api.post('connections', {
      user_id: teacher.id
    })

    return Linking.openURL(`http://api.whatsapp.com/send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorited(){
    const favorites = await AsyncStorage.getItem('favorites')

    let favoritesArray = []

      if (favorites) {
        favoritesArray = JSON.parse(favorites)
      }

    if(isFavorited){
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      })
      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorited(false)

    }else{
      favoritesArray.push(teacher)
      setIsFavorited(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))

  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{uri: `${teacher.avatar}`}}/>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton onPress={handleToggleFavorited} style={[styles.favoriteButton,  isFavorited ? styles.favorited : []]}>
            
            {isFavorited ? <Image source={unfavoriteIcon}/> : <Image source={heartOutlineIcon}/> }

          </RectButton>

          <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;