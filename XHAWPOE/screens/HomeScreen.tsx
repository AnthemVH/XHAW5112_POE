import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { themeFonts, globalStyles } from '../styles';  

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.container}>
      <Image
        source={require('../_images/Logo.jpeg')} 
        style={{ width: 100, height: 100, marginBottom: 20 }} 
        resizeMode="contain"
      />

      <Text style={{ ...themeFonts.title, fontWeight: 'bold' }}>
        Welcome to Empowering the Nation
      </Text>
      
      <Text style={themeFonts.text}>
        Upskill yourself with our training programs!
      </Text>

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={() => navigation.navigate('CoursesScreen', { type: 'sixMonth' })}
      >
        <Text style={globalStyles.buttonText}>View Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={() => navigation.navigate('FeesCalculator')}
      >
        <Text style={globalStyles.buttonText}>Fees Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={() => navigation.navigate('ContactScreen')}
      >
        <Text style={globalStyles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

