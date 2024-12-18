import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const FeatureButton = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.featureButton} onPress={onPress}>
    <Ionicons name={icon} size={32} color="#4A90E2" />
    <Text style={styles.featureButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to EduApp!</Text>
      <View style={styles.featuresContainer}>
        <FeatureButton
          title="Courses"
          icon="library"
          onPress={() => navigation.navigate('Courses')}
        />
        <FeatureButton
          title="Quiz"
          icon="help-circle"
          onPress={() => navigation.navigate('Quiz')}
        />
        <FeatureButton
          title="Gamification"
          icon="trophy"
          onPress={() => navigation.navigate('Gamification')}
        />
        <FeatureButton
          title="Community"
          icon="people"
          onPress={() => navigation.navigate('Community')}
        />
        <FeatureButton
          title="Personalized"
          icon="bulb"
          onPress={() => navigation.navigate('PersonalizedLearning')}
        />
        <FeatureButton
          title="Dashboard"
          icon="stats-chart"
          onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  featureButton: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureButtonText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

