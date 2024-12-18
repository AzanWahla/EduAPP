import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LeaderboardItem = ({ rank, name, points }) => (
  <View style={styles.leaderboardItem}>
    <Text style={styles.rank}>{rank}</Text>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.points}>{points}</Text>
  </View>
);

export default function GamificationScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="trophy" size={48} color="#FFD700" />
        <Text style={styles.title}>Gamification</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>1,250</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Streak</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Rank</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Leaderboard</Text>
        <LeaderboardItem rank="1" name="John Doe" points="2,500" />
        <LeaderboardItem rank="2" name="Jane Smith" points="2,300" />
        <LeaderboardItem rank="3" name="Bob Johnson" points="2,100" />
        <LeaderboardItem rank="4" name="Alice Brown" points="1,900" />
        <LeaderboardItem rank="5" name="You" points="1,250" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Achievements</Text>
        <View style={styles.achievement}>
          <Ionicons name="ribbon" size={24} color="#4A90E2" />
          <Text style={styles.achievementText}>Completed 5 lessons in a row</Text>
        </View>
        <View style={styles.achievement}>
          <Ionicons name="star" size={24} color="#FFD700" />
          <Text style={styles.achievementText}>Reached 1,000 points</Text>
        </View>
      </View>
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
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  rank: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  name: {
    fontSize: 16,
    color: '#333',
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  achievement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  achievementText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

