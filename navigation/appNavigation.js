import {text , view,Image } from 'react-native'
import react from 'react'
import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import profilepage from '../screens/profilepage';
import Newspage from '../screens/Newspage';
import home  from '../screens/home/home';
const Stack = createNativeStackNavigator();
const App = () => {
 
return  (
    <NavigationContainer >
        <Stack.Navigator initalRouteName='Home' >
        
        <Stack.Screen name="Welcome" options ={{headershown : false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options ={{headershown : false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options ={{headershown : false}} component={ SignUpScreen} />
        <Stack.Screen name="Home" options ={{headershown : false}} component={home} />
        <Stack.Screen name="Profile" options ={{headershown : false}} component={profilepage} />
        <Stack.Screen name="News" options ={{headerShown : false }} component={Newspage} />

 </Stack.Navigator>
  
    </NavigationContainer>
  );
}  

export default App;

 
//<Stack.Screen name="load" options ={{headershown : false}} component={loading} />

 