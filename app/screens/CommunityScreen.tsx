import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GroupItem = ({ name, members, image }) => (
  <TouchableOpacity style={styles.groupItem}>
    <Image source={{ uri: image }} style={styles.groupImage} />
    <View style={styles.groupInfo}>
      <Text style={styles.groupName}>{name}</Text>
      <Text style={styles.groupMembers}>{members} members</Text>
    </View>
    <Ionicons name="chevron-forward" size={24} color="#4A90E2" />
  </TouchableOpacity>
);

const DiscussionItem = ({ title, author, replies }) => (
  <TouchableOpacity style={styles.discussionItem}>
    <Ionicons name="chatbubbles-outline" size={24} color="#4A90E2" />
    <View style={styles.discussionInfo}>
      <Text style={styles.discussionTitle}>{title}</Text>
      <Text style={styles.discussionMeta}>by {author} • {replies} replies</Text>
    </View>
  </TouchableOpacity>
);

export default function CommunityScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="people" size={48} color="#4A90E2" />
        <Text style={styles.title}>Community</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Study Groups</Text>
        <GroupItem 
          name="Python Programmers" 
          members={128} 
          image="https://picsum.photos/seed/python/100/100" 
        />
        <GroupItem 
          name="Math Enthusiasts" 
          members={95} 
          image="https://picsum.photos/seed/math/100/100" 
        />
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All Groups</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Discussions</Text>
        <DiscussionItem 
          title="How to solve quadratic equations?" 
          author="MathWhiz" 
          replies={12} 
        />
        <DiscussionItem 
          title="Best resources for learning React Native?" 
          author="AppDev101" 
          replies={8} 
        />
        <DiscussionItem 
          title="Tips for improving study habits" 
          author="ProductiveStudent" 
          replies={15} 
        />
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All Discussions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shared Resources</Text>
        <TouchableOpacity style={styles.resourceItem}>
          <Ionicons name="document-text-outline" size={24} color="#4A90E2" />
          <Text style={styles.resourceText}>Python Cheat Sheet.pdf</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resourceItem}>
          <Ionicons name="link-outline" size={24} color="#4A90E2" />
          <Text style={styles.resourceText}>Algebra Practice Problems</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All Resources</Text>
        </TouchableOpacity>
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
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  groupImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  groupMembers: {
    fontSize: 14,
    color: '#666',
  },
  discussionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  discussionInfo: {
    marginLeft: 10,
    flex: 1,
  },
  discussionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  discussionMeta: {
    fontSize: 14,
    color: '#666',
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  resourceText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  viewAllButton: {
    alignItems: 'center',
    padding: 10,
  },
  viewAllText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

