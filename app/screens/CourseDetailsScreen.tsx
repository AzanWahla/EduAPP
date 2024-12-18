import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const courses = {
  '1': { title: 'Introduction to Programming', description: 'Learn the basics of programming with Python', fullDescription: 'This course covers fundamental programming concepts using Python. You\'ll learn about variables, data types, control structures, functions, and more.' },
  '2': { title: 'Mathematics 101', description: 'Fundamental concepts in mathematics', fullDescription: 'Explore key mathematical concepts including algebra, geometry, and trigonometry. This course provides a solid foundation for further studies in mathematics and related fields.' },
  '3': { title: 'Spanish for Beginners', description: 'Start your journey in learning Spanish', fullDescription: 'Begin your Spanish language journey with this course. You\'ll learn basic vocabulary, grammar, and conversation skills to help you communicate in Spanish.' },
};

export default function CourseDetailsScreen({ route, navigation }) {
  const { courseId } = route.params;
  const course = courses[courseId];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.fullDescription}</Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          // In a full implementation, this would start the course
          // For now, we'll just navigate back to the course list
          navigation.navigate('Courses');
        }}
      >
        <Text style={styles.startButtonText}>Start Course</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

