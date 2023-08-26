import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';

const Question = ({ question, index, handleOptionChange }) => {
  const handleCorrectAnswerChange = (optionIndex) => {
    // Logic to handle the correct answer change
    handleOptionChange(index, optionIndex);
  };

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>Question {index + 1}:</Text>
      <TextInput
        style={styles.questionInput}
        placeholder="Enter question text"
        value={question.text}
        onChangeText={text => handleOptionChange(index, text, 'text')}
      />

      {question.options.map((option, optionIndex) => (
        <View key={optionIndex} style={styles.optionContainer}>
          <TextInput
            style={styles.optionInput}
            placeholder={`Option ${optionIndex + 1}`}
            value={option}
            onChangeText={text => handleOptionChange(index, text, optionIndex)}
          />
          <Switch
            value={question.correctAnswer === optionIndex}
            onValueChange={() => handleCorrectAnswerChange(optionIndex)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
});

export default Question;
