import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import calculateTotal from '../utils/calculateTotal'; 
import { courses } from '../data/coursesData';
import { globalStyles, themeFonts } from '../styles';

type Course = {
  id: string;
  name: string;
  fee: number;
};


const FeesCalculator = () => {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [total, setTotal] = useState<string | null>(null);

  const handleSelectCourse = (course: Course) => {
    setSelectedCourses((prevCourses) => {
      const isSelected = prevCourses.find(c => c.id === course.id);
      if (isSelected) {
        return prevCourses.filter(c => c.id !== course.id);
      } else {
        return [...prevCourses, course];
      }
    });
  };

  const handleCalculate = () => {
    const totalFee = calculateTotal(selectedCourses);
    setTotal(totalFee);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={{ ...themeFonts.title, fontWeight: 'bold' }}>Fees Calculator</Text>
      <Text style={themeFonts.text}>Select Courses:</Text>

      {courses.map((course) => (
        <View key={course.id} style={globalStyles.courseItem}>
          <TouchableOpacity
            onPress={() => handleSelectCourse(course)}
            style={{
              width: 25,
              height: 25,
              borderRadius: 12.5,
              borderWidth: 2,
              borderColor: '#4CAF50',
              backgroundColor: selectedCourses.some(c => c.id === course.id) ? '#4CAF50' : 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {selectedCourses.some(c => c.id === course.id) && (
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 7.5,
                  backgroundColor: 'white',
                }}
              />
            )}
          </TouchableOpacity>
          <Text style={themeFonts.text}>{course.name} - R{course.fee}</Text>
        </View>
      ))}

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={handleCalculate}
      >
        <Text style={globalStyles.buttonText}>Calculate Total Fees</Text>
      </TouchableOpacity>

      {total && (
        <View style={{ marginTop: 20 }}>
          <Text style={themeFonts.text}>Total Fees: R{total}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default FeesCalculator;
