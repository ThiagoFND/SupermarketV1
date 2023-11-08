import React from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './LoginStyle'



const Login = ({navigation}) => {
    return (
    
        <View style={styles.container}>
          <View style={styles.logo}>
            <Icon size={200} color='#2196F3' name='isv'></Icon>
            <Text style={styles.text}>Compre se quizer</Text> 
          </View>
    
          <Text> Login</Text>
          <TextInput placeholder=' Ex.name' style={styles.input}/>
          <Text> password</Text>
          <TextInput placeholder=' Ex.12345' keyboardType='numeric' secureTextEntry={true} style={styles.input}/>
          
          <View style={styles.creatForgotLink}>
            <Text onPress={() => {navigation.navigate("creatAccount")}} style={styles.link}>Create Account</Text>
            <Text onPress={() => {navigation.navigate("forgotPassword")}} style={styles.link}>Forgot Password</Text>
          </View>
    
          <Button title='Enviar'></Button>
    
        </View>
      );
    }
    

export default Login
