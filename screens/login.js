import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import Button from '../components/buttons';
const login = () => {
  return (
    <ImageBackground
      source={require('./../components/beigebg.webp')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => alert('Back button pressed')}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        {/* Logo at the top */}
        <View style={styles.logoContainer}>
          <Image source={require('./../components/final_logo_emtech.png')} style={styles.logo} />
        </View>

        {/* Login your account */}
        <Text style={styles.loginText}>Login your account</Text>

        {/* Email and Password input fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder='Enter Email'
            style={styles.textInput}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder='Enter Password'
            style={styles.textInput}
          />
          
          {/* Login button */}
          
            <Button title='Login'/>
    
          
          {/* Login using Google Account button */}
      <View style={styles.googleButton}>
            <Button title='Login Using Google Account'  />
         </View>
        </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 150,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  loginText: {
    fontFamily: 'Arial',
    alignSelf: 'center',
    marginBottom: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 40,
    width: '30%',
    alignSelf: 'center',
    borderRadius: 50,
    color: 'black',
  },
  googleButton: {
    marginTop: 70,
    width: '150%',
    alignSelf: 'center',
    
  },
  label: {
    alignSelf: 'center',
    marginBottom: 5,
    color: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    alignSelf: 'center',
    width: '80%',
  },
});

export default login;
