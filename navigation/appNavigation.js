import React from 'react'
import {text , view,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import{ createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import profilepage from '../screens/profilepage';
import Newspage from '../screens/Newspage';
import Premierleague from '../Screenss/Premierleague/Premierleague';
import Arsenal from '../Screenss/Premierleague/Arsenal ';
import Egyptianleague from '../Screenss/Egyptianleague/Egyptianleague';
import Italianleague from '../Screenss/Italianleague/Italianleague';
import Spainleague from '../Screenss/Spainleague/Spainleague';
import  Germanleague from '../Screenss/Germanleague/Germanleague';
import Astonvilla from '../Screenss/Premierleague/Astonvilla ';
import Chelsea from '../Screenss/Premierleague/Chelsea';
import Liverpool from '../Screenss/Premierleague/liverpool';
import Manchestercity from '../Screenss/Premierleague/Manchestercity ';
import Manchesterunited from '../Screenss/Premierleague/Manchesterunited';
import Atleticomadrid from '../Screenss/Spainleague/Atleticomadrid';
import Barcelona from '../Screenss/Spainleague/Barcelona';
import RealMadrid from '../Screenss/Spainleague/RealMadrid';
import Inter from '../Screenss/Italianleague/Inter';
import Juventus from '../Screenss/Italianleague/Juventus';
import Milan from '../Screenss/Italianleague/Milan';
import Napoli from '../Screenss/Italianleague/Napoli ';
import Rome from '../Screenss/Italianleague/Rome';
import BayernMunchen from '../Screenss/Germanleague/BayernMunchen';
import Dortmund from '../Screenss/Germanleague/Dortmund';
import Alahly from '../Screenss/Egyptianleague/Alahly';
import Elzamalek from '../Screenss/Egyptianleague/Elzamalek';
import Pyramids from '../Screenss/Egyptianleague/Pyramids';
import Home from '../Screenss/home/home.js';

 
const Stack = createNativeStackNavigator();
const App = () => {
 
return  (
    <NavigationContainer >
        <Stack.Navigator initalRouteName='Home' >
        
        <Stack.Screen name="Welcome" options ={{headershown : false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options ={{headershown : false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options ={{headershown : false}} component={ SignUpScreen} />
        <Stack.Screen name="Home" options ={{headershown : false}} component={Home} />
        <Stack.Screen name="Profile" options ={{headershown : false}} component={profilepage} />
        <Stack.Screen name="News" options ={{headerShown : false }} component={Newspage} />
                <Stack.Screen name="Premierleague" component={Premierleague}  />
                <Stack.Screen name="Spainleague" component={Spainleague}  />
                <Stack.Screen name="Italianleague" component={Italianleague}  />
                <Stack.Screen name="Germanleague" component={Germanleague}  />
                <Stack.Screen name="Egyptianleague" component={Egyptianleague}  />
                <Stack.Screen name="Arsenal" component={Arsenal}  />
                <Stack.Screen name="Astonvilla" component={Astonvilla}  />
                <Stack.Screen name="Chelsea" component={Chelsea}  />
                <Stack.Screen name="Liverpool" component={Liverpool}  />
                <Stack.Screen name="Manchestercity" component={Manchestercity}  />
                <Stack.Screen name="Manchesterunited" component={Manchesterunited}  />
                <Stack.Screen name="Atleticomadrid" component={Atleticomadrid}  />
                <Stack.Screen name="Barcelona" component={Barcelona}  />
                <Stack.Screen name="RealMadrid" component={RealMadrid}  />
                <Stack.Screen name="Inter" component={Inter}  />
                <Stack.Screen name="Juventus" component={Juventus}  />
                <Stack.Screen name="Milan" component={Milan}  />
                <Stack.Screen name="Napoli" component={Napoli}  />
                <Stack.Screen name="Rome" component={Rome}  />
                <Stack.Screen name="BayernMunchen" component={BayernMunchen}  />
                <Stack.Screen name="Dortmund" component={Dortmund}  />
                <Stack.Screen name="Alahly" component={Alahly}  />
                <Stack.Screen name="Elzamalek" component={Elzamalek}  />
                <Stack.Screen name="Pyramids" component={Pyramids}  />
                
 </Stack.Navigator>
  
    </NavigationContainer>
  );
}  

export default App;

 
//<Stack.Screen name="load" options ={{headershown : false}} component={loading} />

 