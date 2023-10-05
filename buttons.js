import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const button = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };
 
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'white', // Custom background color
      paddingVertical: 10, // Vertical padding
      paddingHorizontal: 10, // Horizontal padding
      borderRadius: 20, // Border radius
      alignSelf: 'center',
      width: '50%',
    },
    buttonText: {
      color: 'black', // Text color
      fontSize: 14, // Text size
      fontWeight: 'bold',
      textAlign: 'center', // Text alignment
    },
  });

  export default button;