import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import DashboardScreen from './screens/DashboardScreen';
import QuizScreen from './screens/QuizScreen';
import GamificationScreen from './screens/GamificationScreen';
// import CourseDetailsScreen from './screens/CourseDetailsScreen';
// import GamificationScreen from './screens/GamificationScreen';
import CommunityScreen from './screens/CommunityScreen';
import PersonalizedLearningScreen from './screens/PersonalizedLearningScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Gamification" component={GamificationScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen name="PersonalizedLearning" component={PersonalizedLearningScreen} options={{ title: 'Personalized Learning' }} />
    </Stack.Navigator>
  );
}

function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesList" component={CoursesScreen} options={{ title: 'Courses' }} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} options={{ title: 'Course Details' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Courses') {
              iconName = focused ? 'library' : 'library-outline';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4A90E2',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Courses" 
          component={CoursesStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
      </Tab.Navigator>
  );
}

