import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';
import { courses } from '../data/coursesData';
import { globalStyles, themeFonts } from '../styles';


type CoursesScreenNavigationProp = NavigationProp<RootStackParamList, 'CoursesScreen'>;

const CoursesScreen = () => {
  const navigation = useNavigation<CoursesScreenNavigationProp>();

  return (
    <View style={globalStyles.container}>
      {courses.map((course) => (
        <TouchableOpacity
          key={course.id}
          style={globalStyles.card}
          onPress={() => navigation.navigate('CourseDetail', { course })}
        >
          <Text style={{ ...themeFonts.title, fontWeight: 'bold' }}>{course.name}</Text>
          <Text style={themeFonts.text}>Fee: R{course.fee}</Text>
          <Text style={themeFonts.text}>Duration: {course.length}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CoursesScreen;
