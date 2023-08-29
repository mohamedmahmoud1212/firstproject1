import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Premierleague from "./screens/Premierleague/Premierleague";
import Home from "./screens/home/home";
import Spainleague from "./screens/Spainleague/Spainleague";
import Italianleague from "./screens/Italianleague/Italianleague";
import Germanleague from "./screens/Germanleague/Germanleague";
import Egyptianleague from "./screens/Egyptianleague/Egyptianleague";
import Arsenal from "./screens/Premierleague/Arsenal ";
import Astonvilla from "./screens/Premierleague/Astonvilla ";
import Chelsea from "./screens/Premierleague/Chelsea";
import Liverpool from "./screens/Premierleague/liverpool";
import Manchestercity from "./screens/Premierleague/Manchestercity ";
import Manchesterunited from "./screens/Premierleague/Manchesterunited";
import Atleticomadrid from "./screens/Spainleague/Atleticomadrid";
import Barcelona from "./screens/Spainleague/Barcelona";
import RealMadrid from "./screens/Spainleague/RealMadrid";
import Inter from "./screens/Italianleague/Inter";
import Juventus from "./screens/Italianleague/Juventus";
import Milan from "./screens/Italianleague/Milan";
import Napoli from "./screens/Italianleague/Napoli ";
import Rome from "./screens/Italianleague/Rome";
import BayernMunchen from "./screens/Germanleague/BayernMunchen";
import Dortmund from "./screens/Germanleague/Dortmund";
import Alahly from "./screens/Egyptianleague/Alahly";
import Elzamalek from "./screens/Egyptianleague/Elzamalek";
import Pyramids from "./screens/Egyptianleague/Pyramids";
import UserProfile from "../screens/profilepage";
const Stack = createNativeStackNavigator();
const App = () => {
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown : false ,}}>
            <Stack.Screen name="Home" component={Home}  />
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
                <Stack.Screen name="UserProfile" component={UserProfile}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App ;