import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import Question from './Question';

const CreateExamScreen = () => {
  const [examTitle, setExamTitle] = useState('');
  const [courseName, setCourseName] = useState('');
  const [examDuration, setExamDuration] = useState(60);
  const [numQuestions, setNumQuestions] = useState(10);
  const [questions, setQuestions] = useState([]);

  
  
const handleOptionChange = (questionIndex, value, optionIndex) => {
  const updatedQuestions = questions.map((q, index) => {
    if (index === questionIndex) {
      if (optionIndex === 'text') {
        return { ...q, text: value };
      } else {
        const updatedOptions = q.options.map((opt, optIndex) => {
          if (optIndex === optionIndex) {
            return value;
          }
          return opt;
        });
        return { ...q, options: updatedOptions };
      }
    }
    return q;
  });
  setQuestions(updatedQuestions);
};

const handleCorrectAnswerChange = (questionIndex, correctAnswerIndex) => {
  const updatedQuestions = questions.map((q, index) => {
    if (index === questionIndex) {
      return { ...q, correctAnswer: correctAnswerIndex };
    }
    return q;
  });
  setQuestions(updatedQuestions);
};

  const generateQuestions = () => {
    const newQuestions = Array.from({ length: numQuestions }, () => ({
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    }));
    setQuestions(newQuestions);
  };

  const saveExam = () => {
   
  };

  return (
    <View style={styles.container}>
      

      

      <TextInput
        style={styles.input}
        placeholder="Exam Title"
        value={examTitle}
        onChangeText={setExamTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Course Name"
        value={courseName}
        onChangeText={setCourseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Questions"
        value={numQuestions.toString()}
        onChangeText={text => setNumQuestions(Number(text))}
        keyboardType="numeric"
      />

      <Button title="Generate Questions" onPress={generateQuestions} />
      <FlatList
        data={questions}
        renderItem={({ item, index }) => (
          <Question
            question={item}
            index={index}
            handleOptionChange={handleOptionChange}
            handleCorrectAnswerChange={handleCorrectAnswerChange}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save Exam" onPress={saveExam} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default CreateExamScreen;

