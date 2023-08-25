import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
const RegistrationScreen = ({ navigation }) => {
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [username, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleStudentSwitch = (value) => {
    setIsStudent(value);
    if (value) {
      setIsTeacher(false);
    }
  };

  const handleTeacherSwitch = (value) => {
    setIsTeacher(value);
    if (value) {
      setIsStudent(false);
    }
  };
  

  const handleRegistration = () => {
    // Perform registration logic here based on user inputs
    // You might want to use a proper authentication service like Firebase
    if (isStudent) {
      // Register as a student and navigate to StudentTabNavigator
      navigation.navigate('Student');
    } else if (isTeacher) {
      // Register as a teacher and navigate to TeacherTabNavigator
      navigation.navigate('Teacher');
    }
  };

  const handleLogin = () => {
    // Navigate to the login page
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.registrationContainer}>
        <View style={styles.userTypeContainer}>
          
          <View style={styles.switchContainer}>
            <Text>Student</Text>
            <Switch value={isStudent} onValueChange={handleStudentSwitch} />
            <Text>Teacher</Text>
            <Switch value={isTeacher} onValueChange={handleTeacherSwitch} />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={userEmail}
            onChangeText={setUserEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.continueButton} onPress={handleRegistration} disabled={!isStudent && !isTeacher}>
            <Text style={styles.continueButtonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleSignInButton} >
          <Text style={styles.googleSignInText}> {<Icon name="logo-google" size={13} color="#DD4B39" style={styles.googleIcon} />}  Sign In with Google</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.loginLink} onPress={handleLogin}>
            <Text style={styles.loginLinkText}>Already have an account? Log in...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7', // Background color
  },
  registrationContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Registration box background color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userTypeContainer: {
    marginBottom: 20,
  },
  userTypeText: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC', // Input border color
    borderRadius: 5,
  },
  continueButton: {
    backgroundColor: '#007BFF', // Continue button background color
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white', // Continue button text color
    fontWeight: 'bold',
  },
  googleSignInButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginTop: 10,
    flexDirection: 'center', // Align icon and text horizontally
  },
  googleIcon: {
    marginRight: 10, // Add spacing between icon and text
  },
  googleSignInText: {
    color: '#333333', // Google sign-in text color
  },
  loginLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  loginLinkText: {
    color: '#007BFF', // Login link text color
  },
});

export default RegistrationScreen;
