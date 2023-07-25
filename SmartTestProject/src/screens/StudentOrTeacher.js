// SmartTestProject/src/screens/StudentOrTeacher.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentOrTeacher = ({ userType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Smart Test</Text>
      <Text style={styles.userTypeText}>
        You are a {userType === 'teacher' ? 'Teacher' : 'Student'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userTypeText: {
    fontSize: 18,
  },
});

export default StudentOrTeacher;
