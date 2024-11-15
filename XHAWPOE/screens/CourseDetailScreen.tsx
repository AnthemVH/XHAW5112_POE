import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';

type CourseDetailScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;

interface Props {
  route: CourseDetailScreenRouteProp;
}

const CourseDetailScreen = ({ route }: Props) => {
  const { course } = route.params;

  return (
    <View>
      <Text>Course ID: {course.id}</Text>
      <Text>Course Name: {course.name}</Text>
      <Text>Fee: ${course.fee}</Text>
      <Text>Content:</Text>
      {course.content.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default CourseDetailScreen;


