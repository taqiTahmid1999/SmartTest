import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const demoQuestions = [
  {
    text: 'What is the capital of Dhaka?',
    options: ['Paris', 'London', 'Dhaka', 'Khulna'],
    correctAnswer: 2,
  },
  {
    text: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Earth', 'Venus', 'Jupiter'],
    correctAnswer: 0,
  },
 
];

const StudentExamScreen = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(demoQuestions.length).fill(null));

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const renderQuestionItem = ({ item, index }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.text}</Text>
      {item.options.map((option, optionIndex) => (
        <Button
          key={optionIndex}
          title={option}
          onPress={() => handleAnswerSelect(index, optionIndex)}
          color={selectedAnswers[index] === optionIndex ? '#007BFF' : '#AAAAAA'}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={demoQuestions}
        renderItem={renderQuestionItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Submit Exam" onPress={() => console.log(selectedAnswers)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default StudentExamScreen;
