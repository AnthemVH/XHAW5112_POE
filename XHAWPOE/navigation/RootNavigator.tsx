import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CoursesScreen from '../screens/CoursesScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import FeesCalculator from '../screens/FeesCalculatorScreen';
import ContactScreen from '../screens/ContactScreen';


const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <Stack.Screen name="FeesCalculator" component={FeesCalculator} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
 
    </Stack.Navigator>
  );

}


export type RootStackParamList = {
  Home: undefined;
  CoursesScreen: { type: string };
  CourseDetail: { course: { id: string; name: string; fee: number; content: string[] } };
  FeesCalculator: undefined;
  ContactScreen: undefined;
};

  
