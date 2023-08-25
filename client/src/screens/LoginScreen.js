import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleLogin = () => {
    
    if (isStudent) {
      navigation.navigate('Student');
    } else if (isTeacher) {
      navigation.navigate('Teacher');
    } else {
      
    }
  };

  const handleSignUp = () => {
    
    navigation.navigate('Registration');
  };

  const handleGoogleSignIn = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginHeader}>Log In</Text>

        <View style={styles.switchContainer}>
          <Text>Student</Text>
          <Switch value={isStudent} onValueChange={handleStudentSwitch} />
          <Text>Teacher</Text>
          <Switch value={isTeacher} onValueChange={handleTeacherSwitch} />
        </View>

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

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleSignInButton} >
          <Text style={styles.googleSignInText}> {<Icon name="logo-google" size={13} color="#DD4B39" style={styles.googleIcon} />}  Sign In with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupLink} onPress={handleSignUp}>
          <Text style={styles.signupLinkText}>Don't have an account? Sign up...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7', 
  },
  loginContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#007BFF', 
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white', 
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
    flexDirection: 'center', 
  },
  googleIcon: {
    marginRight: 10, 
  },
  googleSignInText: {
    color: '#333333',
  },
  signupLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  signupLinkText: {
    color: '#007BFF', 
  },
});

export default LoginScreen;
