import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import IntroductionPage from '../pages/IntroductionPage';
import IntroductionPage2 from '../pages/IntroductionPage2';


const { Navigator, Screen } = createStackNavigator();

function AppStack(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="IntroductionPage" component={IntroductionPage}/>
        <Screen name="IntroductionPage2" component={IntroductionPage2}/>
        <Screen name="Landing" component={Landing}/>
        <Screen name="GiveClasses" component={GiveClasses}/>
        <Screen name="StudyTabs" component={StudyTabs}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack