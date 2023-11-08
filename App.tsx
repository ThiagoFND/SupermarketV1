import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login/Login";
import Home from "./src/pages/home/Home";
import CreatAccount from "./src/pages/creatAccount/CreatAccount";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";

 const App =(): JSX.Element => {
  const Stack = createNativeStackNavigator()
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{headerShown: false}} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{title: "Recuperar Senha", headerTitleAlign: "center"}} name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{title: "Criar Usuário", headerTitleAlign: "center"}} name="creatAccount" component={CreatAccount}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name="home" component={Home}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App