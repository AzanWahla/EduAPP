import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProgressBar = ({ progress }) => (
  <View style={styles.progressBarContainer}>
    <View style={[styles.progressBar, { width: `${progress}%` }]} />
  </View>
);

const CourseCard = ({ title, progress, icon }) => (
  <View style={styles.courseCard}>
    <View style={styles.courseCardContent}>
      <Ionicons name={icon} size={24} color="#4A90E2" />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{title}</Text>
        <ProgressBar progress={progress} />
      </View>
      <Text style={styles.courseProgressText}>{progress}%</Text>
    </View>
  </View>
);

export default function PersonalizedLearningScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Learning Path</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Overall Progress</Text>
        <ProgressBar progress={65} />
        <Text style={styles.progressText}>65% Complete</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Courses</Text>
        <CourseCard title="Python Mastery" progress={80} icon="logo-python" />
        <CourseCard title="Data Structures" progress={45} icon="git-branch-outline" />
        <CourseCard title="Machine Learning" progress={20} icon="hardware-chip-outline" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        <View style={styles.card}>
          <View style={styles.recommendationContent}>
            <Ionicons name="star" size={24} color="#FFD700" style={styles.recommendationIcon} />
            <View style={styles.recommendationText}>
              <Text style={styles.recommendationTitle}>Complete Python Challenge</Text>
              <Text style={styles.recommendationDescription}>Boost your Python skills</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Challenge</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, styles.customizeButton]}>
        <Text style={styles.buttonText}>Customize Learning Path</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    marginLeft: 16,
  },
  progressText: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: 'bold',
    marginTop: 5,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4A90E2',
  },
  courseCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseInfo: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseProgressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  recommendationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  recommendationIcon: {
    marginRight: 15,
  },
  recommendationText: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  customizeButton: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
});

