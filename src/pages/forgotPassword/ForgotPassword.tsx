import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';


const ForgotPassword = () => {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Text style={styles.text}>Esqueceu a senha?</Text>
        <Text style={styles.linha}>_____________________________________________</Text>
        <Text style={styles.text2}>Vamos recuperar sua senha de acesso.</Text>
      </View>

      <Text>Qual é o seu CPF</Text>
      <TextInput placeholder=' Digite seu CPF' style={styles.input}/>
      
      <Button title='Recuperar minha Senha'/>

  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:40,
  },

  input: {
    height: 40,
    width: "100%",
    borderColor: "#848484",
    borderWidth: 1,
    marginTop: "3%",
    marginBottom:"5%"
  },

  buttons: {
    alignSelf:'flex-end',
    marginBottom:'5%',
    padding: 10,
    width: '100%'
  },

  logo: {
    alignItems: 'center',
    marginBottom: '15%'
  },

  text: { 
    fontSize: 30,
    color: '#2196F3'
  },

  linha: {
    color: '#2196F3'
  },

  text2: {
    color: '#A1A1A1',
    fontSize: 15
  }
});
export default ForgotPassword
