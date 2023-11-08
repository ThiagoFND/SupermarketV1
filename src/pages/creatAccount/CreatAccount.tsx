import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';




const CreatAccount = () => {
  return (
    <View style={styles.container}>

    <View style={styles.logo}>
      <Icon size={100} color='#2196F3' name='adduser'></Icon>
    </View>

    <Text>Nome</Text>
    <TextInput placeholder=' Ex.name' style={styles.input}/>

    <Text>Sobrenome</Text>
    <TextInput placeholder=' Ex.Silva' style={styles.input}/>

    <Text>E-mail</Text>
    <TextInput placeholder=' Ex.exemplo@gmail.com' style={styles.input}/>

    <Text>Cpf</Text>
    <TextInput placeholder=' Ex.123.456.789-0' keyboardType='numeric' secureTextEntry={true} style={styles.input}/>

    <Text>Senha</Text>
    <TextInput placeholder=' Ex.12345' keyboardType='numeric' secureTextEntry={true} style={styles.input}/>

    <Button title='salvar'/>

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


  viewButtons: {
    flexDirection:'row',
    marginBottom:'5%',
    padding: 10,
    width: '100%',
  },

  logo: {
    alignItems: 'center',
    marginBottom: '15%'
  },
  button: {
    marginEnd: "auto",
    marginStart: "auto"
  }
  
});
export default CreatAccount
